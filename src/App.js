import Card from './Card';
import './App.css';

function App() {
  let data=[
    {
      title:"Web Development",
      subtitle: "Development",
      desc:"Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
      image:"https://1xqdqy285sk7212bfiejcprr-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Web-Development-Company-USA.jpg",
    },
    {
      title:"App Development",
      subtitle: "Development",
      desc:"Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These software applications are designed to run on mobile devices, such as a smartphone or tablet computer.",
      image:"https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Android-app-development-cost-1.png",
    },
    {
      title:"Game Development",
      subtitle: "Development",
      desc:"Video game development is the process of developing a video game. The effort is undertaken by a developer, ranging from a single person to an international team dispersed across the globe.",
      image:"https://mindlercareerlibrarynew.imgix.net/Game_Development.png",
    },
    {
      title:"AI and Machine Learning",
      subtitle: "Development",
      desc:"Artificial Intelligence and machine learning algorithms will help you process unutilized or non-utilized data, identifying the trends, which would not be possible to a human being - and then make decisions to meet specific objectives. The competitive advantage of machine learning holds the key to increase the business in attaining new heights.",
      image:"https://www.valuecoders.com/common/images-2/machine-learning-img.png",
    },
    {
      title:"Movie Making",
      subtitle: "Entertainment",
      desc:"Filmmaking involves a number of complex and discrete stages including an initial story, idea, or commission, through screenwriting, casting, shooting, sound recording and pre-production, editing, and screening the finished product before an audience that may result in a film release and an exhibition.",
      image:"https://en.pimg.jp/066/450/570/1/66450570.jpg",
    },
  ]
  return (
    <div>
      <h1 style={{marginLeft: "15%"}}>
        All Services
      </h1>
      <div className="container">
        {
          data.map((data, index)=>(
          <Card key={index} title={data.title} subtitle={data.subtitle} desc={data.desc} image={data.image}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
