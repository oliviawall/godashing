
import { useSub } from './../customHooks';

const WithSub = props => useSub(props) && props.children;

export default WithSub;
