import './styles.css'

const Roll = () => {

  const items = [];

  for (let i = 1; i <= 16; i++) {
    items.push(
      <span key={i} style={{ '--i': i }} className="font-bold text-2xl"><i>Programing</i> | is <i>A</i>wesome</span>
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