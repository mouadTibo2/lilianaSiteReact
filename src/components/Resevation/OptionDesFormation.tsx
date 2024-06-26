import formationData from "../Data/formationData.json";

const formationForm = () => {

const optionFormation = formationData.map(item =>{
    return <option key={item.idFormation} value={item.titreformation}>{item.titreformation}</option>
})
      return (
      <>
        {optionFormation}
      </>
  )
}

export default formationForm