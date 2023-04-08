import React, {PureComponent} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {color} from '../theme';
import {isIOS} from '../utils/ui';
import {Icon} from './icon/Icon';

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#EFEFF6',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  error: {
    borderBottomColor: color.Error,
  },
  label: {
    position: 'absolute',
    color: color.Blue,
  },
  clearBtn: {
    padding: 8,
  },
  errorMessage: {
    paddingTop: 4,
    color: color.Error,
  },
  errorPlaceholder: {
    height: 14,
  },
  bottomBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const labelFontSizeValues = [17, 14];
const labelTopValues = [10, -12];

class Input extends PureComponent {
  constructor(props) {
    super(props);
    const stateIndex = +!!(props.value || props.placeholder).length;
    this.labelFontSize = new Animated.Value(labelFontSizeValues[stateIndex]);
    this.labelTop = new Animated.Value(labelTopValues[stateIndex]);
    this.state = {
      secureTextEntry: props.allowSecureTextEntry,
    };
  }

  static defaultProps = {
    allowSecureTextEntry: undefined,
    secureTextEntryIconStyle: undefined,
    allowClear: true,
    allowedError: true,
    allowHelp: false,
    borderLess: false,
    clearIconStyle: undefined,
    clearIconTestID: undefined,
    containerStyle: undefined,
    error: undefined,
    errorStyle: undefined,
    helpIcon: undefined,
    helpIconColor: undefined,
    helpIconName: undefined,
    helpIconStyle: undefined,
    helpIconTestID: undefined,
    helpPress: undefined,
    inputRef: undefined,
    inputStyle: undefined,
    label: undefined,
    labelStyle: undefined,
    onChangeText: undefined,
    onFocus: undefined,
    style: undefined,
    testID: undefined,
    value: undefined,
    clearIconColor: '#BBBBBF',
    editable: true,
    placeholder: '',
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.value?.length && !!this.props.value?.length) {
      this.moveLabelUp();
    }
  }

  moveLabelUp() {
    this.labelAnimated({
      toValues: {
        labelFontSize: labelFontSizeValues[1],
        labelTop: labelTopValues[1],
      },
      duration: 500,
    });
  }

  handleFocus = () => {
    this.moveLabelUp();
    if (this.props.onFocus) {
      this.props.onFocus();
    }

    if (this.input) {
      this.input.focus();
    }
  };

  labelAnimated = ({toValues, duration}) => {
    Animated.parallel([
      Animated.spring(this.labelFontSize, {
        toValue: toValues.labelFontSize,
        duration,
        useNativeDriver: false,
      }),
      Animated.spring(this.labelTop, {
        toValue: toValues.labelTop,
        duration,
        useNativeDriver: false,
      }),
    ]).start();
  };

  handleBlur = () => {
    if (!this.props.value && !this.props.placeholder) {
      this.labelAnimated({
        toValues: {
          labelFontSize: labelFontSizeValues[0],
          labelTop: labelTopValues[0],
        },
        duration: 300,
      });
    }
  };

  handleClear = () => {
    this.props.onChangeText('');
    this.handleFocus();
  };

  handleSecureTextEntry = () =>
    this.setState(state => ({secureTextEntry: !state.secureTextEntry}));

  renderSecureTextEntryOption = () => {
    const {allowSecureTextEntry, secureTextEntryIconStyle} = this.props;
    const {secureTextEntry} = this.state;
    return (
      allowSecureTextEntry && (
        <TouchableOpacity
          style={[s.clearBtn, secureTextEntryIconStyle]}
          onPress={this.handleSecureTextEntry}>
          <Icon
            name="eye"
            size={20}
            color={secureTextEntry ? '#97A8B7' : '#22A0E7'}
          />
        </TouchableOpacity>
      )
    );
  };

  renderHelpOption = () => {
    const {
      allowHelp,
      helpIcon,
      helpIconName,
      helpIconColor,
      helpIconTestID,
      helpPress,
      helpIconStyle,
    } = this.props;

    return (
      allowHelp && (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[s.clearBtn, helpIconStyle]}
          onPress={helpPress}
          testID={helpIconTestID}>
          {helpIcon || (
            <Icon
              name={helpIconName || 'help'}
              size={22}
              color={helpIconColor}
            />
          )}
        </TouchableOpacity>
      )
    );
  };

  renderClearOption = () => {
    const {allowClear, clearIconColor, clearIconStyle, clearIconTestID, value} =
      this.props;

    return (
      allowClear &&
      value?.length > 0 && (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[s.clearBtn, clearIconStyle]}
          onPress={this.handleClear}
          testID={clearIconTestID}>
          <Icon name="clear" size={16} color={clearIconColor} />
        </TouchableOpacity>
      )
    );
  };

  renderError = () => {
    const {allowedError, error, errorStyle, testID} = this.props;

    if (!allowedError) {
      return null;
    }

    return error ? (
      <Text style={[s.errorMessage, errorStyle]} testID={`${testID}Error`}>
        {Array.isArray(error) ? error[0] : error}
      </Text>
    ) : (
      <View style={s.errorPlaceholder} />
    );
  };

  renderLabel = () => {
    const {label, labelStyle} = this.props;

    const labelStyles = [
      s.label,
      labelStyle,
      {
        fontSize: this.labelFontSize,
        transform: [{translateY: this.labelTop}],
      },
    ];
    return label && <Animated.Text style={labelStyles}>{label}</Animated.Text>;
  };

  setInputRef = el => {
    if (this.props.inputRef) {
      this.props.inputRef(el);
    }
    this.input = el;
  };

  renderInput = () => {
    const {inputStyle, editable, value, testID, ...rest} = this.props;
    const {secureTextEntry} = this.state;

    rest.ref = this.setInputRef;

    if (isIOS || !rest.mask) {
      rest.testID = testID;
    }

    return editable ? (
      <TextInput
        selectionColor={'#BBBBBF'}
        color={color.Black}
        secureTextEntry={secureTextEntry}
        {...rest}
        value={value}
        style={[s.input, inputStyle]}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        placeholderTextColor={color.Gray}
        underlineColorAndroid="transparent"
        // keyboardAppearance={theme.isNightMode ? 'dark' : 'default'}
      />
    ) : (
      <Text style={[s.input, inputStyle]} testID={testID}>
        {value}
      </Text>
    );
  };

  render() {
    const {style, error, containerStyle, borderLess} = this.props;

    const containerStyles = [
      s.container,
      !borderLess && s.bottomBorder,
      containerStyle,
      error && s.error,
    ];

    return (
      <View style={style}>
        {this.renderLabel()}
        <View style={containerStyles}>
          {this.renderInput()}
          {this.renderClearOption()}
          {this.renderSecureTextEntryOption()}
          {this.renderHelpOption()}
        </View>
        {this.renderError()}
      </View>
    );
  }
}

export {Input};
