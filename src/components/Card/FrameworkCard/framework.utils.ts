import { Framework } from 'components/Card/FrameworkCard/framework.types';

/**
 * @param {Framework} type for a framework
 * @return {string} link for a specific {@link Framework}
 */
export const getFrameworkLink = (type: Framework): string => {
  switch (type) {
    case Framework.REACT:
      return 'https://react.dev/';
    case Framework.MATERIAL_UI:
      return 'https://mui.com';
    case Framework.PYTHON:
      return 'https://www.python.org/';
    case Framework.NEST_JS:
      return 'https://nestjs.com/';
    case Framework.ELECTRON:
      return 'https://www.electronjs.org/de/';
    case Framework.JAVA:
      return 'https://www.java.com/';
    case Framework.SPRING_BOOT:
      return 'https://spring.io/';
    case Framework.ANDROID:
      return 'https://developer.android.com/';
    case Framework.KOTLIN:
      return 'https://kotlinlang.org';
    case Framework.VUE_JS:
      return 'https://vuejs.org/';
    case Framework.ARDUINO:
      return 'https://www.arduino.cc/';
    case Framework.RUBY_ON_RAILS:
      return 'https://rubyonrails.org/';
    case Framework.RASPBERRY_PI:
      return 'https://www.raspberrypi.org/';
    default:
      throw new Error(`Invalid framework type '${type}'`);
  }
};
