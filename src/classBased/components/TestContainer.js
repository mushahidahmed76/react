import React,{ useState } from 'react';


class TestContainer extends React.Component {
  
 //   const [me,setMe] = useState('light');
    const [count, setCount] = useState('0');
     changeIt = () => {

    }

  render() {
    return (
       <div className={me}>
        <button onClick={changeIt()}>Click me</button>
      </div>
    )
  }
}
export default TestContainer