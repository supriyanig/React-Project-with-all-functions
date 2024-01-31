export default function CoreConcept({image,title,description}){

    return(
      <ul>
        <img className='core-img' src={image} alt={title}/>
        <h1>{title}</h1>
        <p>{description}</p>
      </ul>
    )
  }