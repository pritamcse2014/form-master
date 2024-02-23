import './App.css'
import GrandPa from './components/GrandPa/GrandPa';
import HookForm from './components/HookForm/HookForm';
import RefForm from './components/RefForm/RefForm';
import ReuseableForm from './components/ReuseableForm/ReuseableForm';
import SimpleForm from './components/SimpleForm/SimpleForm';
import StatefulForm from './components/StatefulForm/StatefulForm';

const App = () => {
  const handleSIgnUpSubmit = (data) => {
    console.log(data)
}

const handleUpdateProfile = (data) => {
  console.log(data);
}
  return (
    <div>
      <SimpleForm />
      <StatefulForm />
      <RefForm />
      <HookForm />
      <ReuseableForm formTitle={`Sign Up`} handleSubmit = {handleSIgnUpSubmit} ><div><h2>Please Sign Up</h2></div></ReuseableForm>
      <ReuseableForm formTitle={`Profile Update`} submitButton={`Update`} handleSubmit = {handleUpdateProfile} ><div><h2>Please Update</h2></div></ReuseableForm>

      <div>
          <GrandPa />
      </div>
    </div>
  );
};

export default App;