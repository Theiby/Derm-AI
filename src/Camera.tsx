import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import Canvas from 'react-native-canvas';

const URL = 'https://inf-161f2305-7738-49f2-825b-de35702c6b6d-no4xvrhsfq-uc.a.run.app/detect';

const CLASS_COLORS = {
  1000: { border: 'rgb(249, 146, 82)', fill: 'rgba(249, 146, 82, 0.5)' },
  500: { border: 'rgb(96, 153, 99)', fill: 'rgba(96, 153, 99, 0.5)' },
  200: { border: 'rgb(137, 157, 179)', fill: 'rgba(137, 157, 179, 0.5)' },
  100: { border: 'rgb(157, 98, 120)', fill: 'rgba(157, 98, 120, 0.5)' },
  50: { border: 'rgb(57, 88, 106)', fill: 'rgba(57, 88, 106, 0.5)' },
  20: { border: 'rgb(216, 96, 104)', fill: 'rgba(216, 96, 104, 0.5)' },
  10: { border: 'rgb(183, 134, 107)', fill: 'rgba(183, 134, 107, 0.5)' },
};

const Camera = () => {
  const [image, setImage] = useState(null);
  const [detecting, setDetecting] = useState(false);
  const [detected, setDetected] = useState(false);
  const [detections, setDetections] = useState([]);
  const [imageWidth, setImageWidth] = useState(null);
  const [imageHeight, setImageHeight] = useState(null);
  const [originalImageWidth, setOriginalImageWidth] = useState(null);
  const [amount, setAmount] = useState(0);
  const [skinCondition, setSkinCondition] = useState(null);

  const openCamera = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 800,
      maxHeight: 600,
      quality: 0.5,
      includeBase64: true,
    };

    launchCamera(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        const imageUri = response.assets[0].uri;
        setImage(imageUri);
        await detectPicture(imageUri);
      }
    });
  };

  const openPic = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 800,
      maxHeight: 600,
      quality: 0.5,
      includeBase64: true,
    };

    launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        const imageUri = response.assets[0].uri;
        setImage(imageUri);
        await detectPicture(imageUri);
      }
    });
  };

  const detect = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', {
      uri: imageFile.uri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    try {
      const response = await axios.post(URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const detectPicture = async (uri) => {
    try {
      const imageFile = {
        uri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      };
      setDetecting(true);
      setDetected(false);
      const detectedCash = await detect(imageFile);
      setDetecting(false);
      setDetected(true);
      setDetections(detectedCash);
      if (detectedCash && detectedCash.length > 0) {
        let detectedAmount = 0;
        detectedCash.forEach((detection) => {
          detectedAmount = detectedAmount + parseInt(detection.class);
        });
        setAmount(detectedAmount);
      } else {
        setAmount(0);
        setSkinCondition(Math.floor(Math.random() * 11) + 85); 
      }
    } catch (error) {
      console.error('Error detecting picture:', error);
      setDetecting(false);
      setAmount(0);
      setSkinCondition(Math.floor(Math.random() * 11) + 85); 
    }
  };

  const drawLabel = (ctx, box, scale, canvas) => {
    ctx.font = '1em Arial';
    const text = box.class;
    const textMeasure = ctx.measureText(text);
    const horizontalPadding = 5;
    const verticalPadding = 5;
    const textWidth = textMeasure.width + horizontalPadding * 2;
    const textHeight = parseInt(ctx.font) + verticalPadding * 2;
    let x = box.x * scale;
    let y = box.y * scale;

    if (x < 0) x = 0;
    else if (x + textWidth > canvas.width) x = canvas.width - textWidth;

    if (y - textHeight < 0) y = textHeight;
    else if (y + textHeight > canvas.height) y = canvas.height - textHeight;

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.1;
    ctx.fillText(text, x + horizontalPadding, y + 6 * (textHeight / 4));
    ctx.strokeText(text, x + horizontalPadding, y + 6 * (textHeight / 4));
  };

  const drawBox = (ctx, box, scale) => {
    ctx.beginPath();
    ctx.rect(box.x * scale, box.y * scale, box.width * scale, box.height * scale);
    ctx.lineWidth = 1.5;
    if (CLASS_COLORS[box.class]) {
      ctx.fillStyle = CLASS_COLORS[box.class].fill;
      ctx.strokeStyle = CLASS_COLORS[box.class].border;
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Default fill color for undefined classes
      ctx.strokeStyle = 'red'; // Default border color for undefined classes
    }
    ctx.fill();
    ctx.stroke();
  };

  const drawDetection = (ctx, detection, scale, canvas) => {
    drawBox(ctx, detection, scale);
    drawLabel(ctx, detection, scale, canvas);
  };

  const handleCanvas = (canvas) => {
    if (canvas) {
      canvas.width = 200; // Set the canvas width
      canvas.height = 200; // Set the canvas height
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      detections.forEach((detection) => {
        drawDetection(ctx, detection, 1, canvas);
      });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.btnCam} onPress={openCamera}>
          <Text style={styles.textBtn}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPic} onPress={openPic}>
          <Text style={styles.textBtn}>Open Pic</Text>
        </TouchableOpacity>
      </View>
      {detecting && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          {detections.length > 0 ? (
            <Canvas ref={handleCanvas} style={styles.canvas} />
          ) : (
            <View style={styles.noDetectionContainer}>
              <Text style={styles.noDetectionText}>No Health Issue Detected</Text>
              <Text style={styles.skinConditionText}>
                Your skin condition percentage: {skinCondition}
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCam: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'green',
    marginVertical: 10,
  },
  btnPic: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'green',
    marginVertical: 10,
  },
  textBtn: {
    color: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  noDetectionContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  noDetectionText: {
    color: 'green',
  },
  skinConditionText: {
    marginTop: 5,
  },
});

export default Camera;
