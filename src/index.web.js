import { AppRegistry } from 'react-native';
import App from 'web/App';

AppRegistry.registerComponent('WeatherApp', () => App);
AppRegistry.runApplication('WeatherApp', { rootTag: document.getElementById('root') });
