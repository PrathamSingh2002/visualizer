import './App.css';
import { Link } from 'react-router-dom';
function Sidebar(prop){
    
    return(
        <div className='sidebar' id='sbar'>
            <li >
                <Link to={"/"} className='link'>Home</Link>
            </li>
            <li>QUADRATIC
                <li onClick={()=>{prop.algo(1) ;prop.toggle()}}>
                    <Link to={"/Algorithm"} className='link'>
                        BubbleSort
                    </Link>
                </li>
                <li onClick={()=>{prop.algo(3) ;prop.toggle()}}>
                    <Link to={"/Algorithm"} className='link'>
                        SelectionSort
                    </Link>
                </li>
                <li onClick={()=>{prop.algo(2);prop.toggle()}}>
                    <Link to={"/Algorithm"} className='link'>
                        InsertionSort
                    </Link>
                </li>
            </li>

            <li>LOGRITHMIC

                <li onClick={()=>{prop.algo(4);prop.toggle()}}>
                    <Link to={"/Algorithm"} className='link'>
                        QuickSort
                    </Link>
                </li>
                <li onClick={()=>{prop.algo(5);prop.toggle()}}>
                    <Link to={"/Algorithm"} className='link'>
                        MergeSort
                    </Link>
                </li>
            </li>
            <li>LINEAR
                <li onClick={()=>{prop.algo(6);prop.toggle()}}>
                    <Link to={"/Algorithm"} className='link'>
                        Radix
                    </Link>
                </li>
            </li>
        </div>
    )
}
export  default Sidebar;