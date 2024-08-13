import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ArrowForward from '../../assets/icons/arrowforward.svg';

export const ProgressStep = ({children}) => {
  return <View style={styles.stepContainer}>{children}</View>;
};

export const ProgressSteps = ({
  steps,
  currentStepIndex,
  onStepChange,
  onSkip,
  onNext,
  isScrollable,
  showLabel,
  labelIcon,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <TouchableOpacity
              style={[styles.step]}
              onPress={() => onStepChange(index)}
              key={index}>
              <View
                style={[
                  styles.stepIndicator,
                  currentStepIndex === index && styles.activeStep,
                ]}>
                {step.icon ? (
                  <step.icon height={22} width={22} />
                ) : (
                  <Text style={styles.stepNumber}>{index + 1}</Text>
                )}
              </View>
              {showLabel && <Text style={styles.stepLabel}>{step.title}</Text>}
            </TouchableOpacity>
          ))}
        </View>
        {isScrollable ? (
          <ScrollView style={styles.scrollView}>
            {steps[currentStepIndex].content}
          </ScrollView>
        ) : (
          <View style={styles.stepContent}>
            {steps[currentStepIndex].content}
          </View>
        )}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onSkip}
          disabled={currentStepIndex === steps.length - 1}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={onNext}
          disabled={currentStepIndex === steps.length - 1}>
          <ArrowForward height={24} width={14} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  step: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  activeStep: {
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  stepIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#7A7A7A',
    marginBottom: 5,
  },
  icon: {
    height: 20,
    width: 20,
  },
  stepNumber: {
    fontSize: 16,
    color: '#ffffff',
  },
  stepLabel: {
    fontSize: 14,
    color: '#333',
  },
  stepContent: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: '#19CA9F',
    padding: 15,
    borderRadius: 8,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 700,
  },
  stepContainer: {
    flex: 1,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
