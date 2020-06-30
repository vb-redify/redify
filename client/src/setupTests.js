import { configure } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

// configure Enzyme to use the adaptor
configure({ adapter: new Adaptor() });
