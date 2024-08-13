import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressSteps, ProgressStep} from '../components/progressSteps'; // Adjust the import path as needed
import {onboarding} from '../constants'; // Adjust the import path as needed

const Onboarding = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleStepChange = index => {
    setCurrentStepIndex(index);
  };

  const handleSkip = () => {
    // Skip to the last step
    setCurrentStepIndex(onboarding.length - 1);
  };

  const handleNext = () => {
    if (currentStepIndex < onboarding.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <ProgressSteps
        steps={onboarding.map((step, index) => ({
          ...step,
          content: (
            <ProgressStep key={index}>
              <View style={styles.rectangleContainer}>
                <View style={styles.rectangle}>
                  <View style={styles.rectangleNotch} />
                  <View style={styles.circle}>
                    <step.image height={50} width={50} />
                  </View>
                </View>
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.titleText}>{step.title}</Text>
                <Text style={styles.subTitleText}>{step.description}</Text>
              </View>
            </ProgressStep>
          ),
        }))}
        isScrollable={false}
        showLabel={false}
        currentStepIndex={currentStepIndex}
        onStepChange={handleStepChange}
        onSkip={handleSkip}
        onNext={handleNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    paddingTop: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 15,
    color: '#E9E8E8',
  },
  subTitleText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#E9E8E8',
  },
  stepImage: {
    width: '100%',
    height: '60%',
    marginBottom: 15,
  },
  rectangleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 245,
    height: 472,
    borderRadius: 30,
    border: '8px',
    borderColor: '#FFFFFF',
    borderWidth: 4,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#7A7A7A',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 20,
  },
  rectangleNotch: {
    position: 'absolute',
    top: -4, // Offset by the border width
    width: 127,
    height: 20,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    alignSelf: 'center',
  },
});

export default Onboarding;
