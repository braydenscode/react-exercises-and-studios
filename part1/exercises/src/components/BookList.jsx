export default function BookList() {
   let pageTitle = "Reading List";
   let book1 = "https://m.media-amazon.com/images/I/61BvkqoxLxL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71O2XIytdqL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div style={{border: '1px solid black', margin: '20px', padding: '3px'}}>
         <h3>{pageTitle}</h3>
         <img style={{maxHeight: '300px', maxWidth: '200px', padding: '3px'}} src={book1} alt="Cover art of The Art of War by Sun Tzu" />
         <img style={{maxHeight: '300px', maxWidth: '200px', padding: '3px'}} src={book2} alt="Cover art of 1984 by George Orwell" />
         <img style={{maxHeight: '300px', maxWidth: '200px', padding: '3px'}} src={book3} alt="Cover art of Crime and Punishment by Fyodor Dostoevsky" />
      </div>      
   );
}