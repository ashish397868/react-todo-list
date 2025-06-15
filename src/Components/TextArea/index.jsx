import './index.css'

const index = ({title,value,func}) => {
  return (
    <>
      <textarea className="textarea" placeholder={title} value={value} onChange={func} />
    </>
  )
}

export default index