// configure environment we're running in

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import DotEnv from 'dotenv'; 
require('dotenv').config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter()
});