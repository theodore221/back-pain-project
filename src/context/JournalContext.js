import createDataContext from './createDataContext';


const journalReducer = (state, action) => {
  switch (action.type) {
    case 'add_entry':
      return [
        ...state, 
        {
          title: `Pain Entry #${Math.floor(Math.random()*999)}`, 
          id: Math.floor(Math.random()*9999),
          date: action.payload.date,
          pain_intensity: action.payload.painIntensity,
          pain_tolerance: action.payload.painTolerance,
          mood: action.payload.mood,
          activity_level: action.payload.activityLevel,
          notes: action.payload.notes
        }];
    case 'delete_entry':
      return state.filter((journalEntry) => journalEntry.id !== action.payload );
    default:
      return state;
  }
};

const addJournalEntry = dispatch => {
  return (painIntensity, painTolerance, mood, activityLevel, notes, date, callback) => {
    dispatch({ type: 'add_entry', payload:{painIntensity, painTolerance, mood, activityLevel, notes, date} });
    callback();

  }
};

const deleteEntry = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_entry', payload: id});
    
  }
};

export const {Context, Provider} = createDataContext(
  journalReducer, 
  {addJournalEntry, deleteEntry},
  [{title: 'Pain Entry #1', id:1, date:'28-10-2020', pain_intensity: 2, pain_tolerance: 1, mood:5, activity_level: 6, notes:''}]
);

