export default function Main(props) {
    const {data} = props
    return (
          <div className="imagecontainer">
             <img src={data.hdurl} alt={data.title || 'bg.img'} className="bgimage"/>
          </div>
          
       
    )
}