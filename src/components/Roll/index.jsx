import './styles.css'

const Roll = () => {

  const items = [];

  for (let i = 1; i <= 18; i++) {
    items.push(
      <span key={i} style={{ '--i': i }} className="font-extrabold text-3xl"><i>Programing</i> | is | <i>A</i>wesome</span>
    )
  }

  return (
    <div className="flex items-center justify-center container w-full h-full">

      <div className="box flex items-center justify-center w-full h-full">
        {items}
      </div>
      
    </div>
  )
}

export default Roll