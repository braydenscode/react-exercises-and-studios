import './styles.css';

function Button() {

   function onLearnMore() {
      return alert("Just keep swimming")
   };

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;