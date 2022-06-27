export default function Li ({ head, children}) {
   return (
     <li className="mt-4 lg:mt-3">
       {head && <b>{head} </b>}
       {children}
     </li>
   );
}