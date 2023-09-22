//@ts-nocheck

export default function getOptions(selectedOptions,Options){
  
  const answerArray = Options.filter(option =>
    selectedOptions.includes(option.id)
  );

  return answerArray;
}