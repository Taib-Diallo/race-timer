import { useState, useEffect } from 'react';
import Contestant from './Contestant.jsx';
import { contestantStyles } from '../styles';
import { contestantData } from '../assets/data';
import { useNavigate } from 'react-router-dom';
import '../styles/race.css';

function Race(props) {
  const [contestants, setContestants] = useState(contestantData);
  let navigateTo = useNavigate();

  const handleStop = () => {
    props.stopTimer();
    navigateTo('/config');
  };

  useEffect(() => {
    let newContestantPos = contestants.map((contestant) => {
      return {
        ...contestant,
        xpos: contestant.xpos + Math.floor(Math.random() * 10),
      };
    });
    setContestants(newContestantPos);
  }, [props.currentTime]);

  return (
    <div>
      <div className='Finish-Line' style={contestantStyles.contestantList}>
        {contestants.map((contestant) => (
          <Contestant
            key={contestant.id}
            name={contestant.name}
            xpos={contestant.xpos}
          />
        ))}

        {/* <div className='Finish'>
            <p><b>Finish Line!!!!</b></p>
        </div>
         */}
      </div>
      <div style={contestantStyles.contestantList} >
          <button onClick={handleStop}>Stop the Timer!</button>
      </div>
    </div>
  );
}
export default Race;
