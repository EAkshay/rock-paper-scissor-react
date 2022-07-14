import './App.css';
import Main from './components/Main';
import { useSelector, useDispatch } from "react-redux"
import { ruleClick } from "./features/rules"
import RulesComp from './components/rulesComp';

function App() {
  const rules = useSelector((state) => state.rule.value)
  const dispatch = useDispatch();
  return (
    <div className='app'>
      <Main  />
        {rules.rule && <div onClick={() => dispatch(ruleClick({rule:false}))} className='overlay'></div>}
        {rules.rule && <RulesComp />}
    </div>
  );
}

export default App;
