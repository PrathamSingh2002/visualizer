import './App.css';
function Home(){
    const s1=`
    Sorting algorithms are used to sort a data structure according to a specific order relationship, such as numerical order or lexicographical order.`

    const s11=`This operation is one of the most important and widespread in computer science. For a long time, new methods have been developed to make this procedure faster and faster.`

    const s12=`There are currently hundreds of different sorting algorithms, each with its own specific characteristics. They are classified according to two metrics: space complexity and time complexity.`

    const s13=`Those two kinds of complexity are represented with asymptotic notations, mainly with the symbols O, Θ, Ω, representing respectively the upper bound, the tight bound, and the lower bound of the algorithm's complexity, specifying in brackets an expression in terms of n, the number of the elements of the data structure.

    `
    const nested=`Most of them fall into two categories:`




    const s2 =`Logarithmic
    The complexity is proportional to the binary logarithm (i.e to the base 2) of n.
    An example of a logarithmic sorting algorithm is Quick sort, with space and time complexity O(n × log n).
`
    
    
    
    const s3=`Quadratic
    The complexity is proportional to the square of n.
    An example of a quadratic sorting algorithm is Bubble sort, with a time complexity of O(n2).
    Space and time complexity can also be further subdivided into 3 different cases: best case, average case and worst case.

   ` 
    
    const s4=`Sorting algorithms can be difficult to understand and it's easy to get confused. We believe visualizing sorting algorithms can be a great way to better understand their functioning while having fun!`
    return(
        <div className='home'>
            <div className='hometitle'>
                Description
            </div>
            <div className='hometext'>
                <li>{s1}</li>
                <li>{s11}</li>
                <li>{s12}</li>
                <li>{s13}</li>
                <li>
                    {nested}
                    <li>{s2}</li>
                    <li>{s3}</li>
                </li>
                <li>{s4}</li>
            </div>
        
        </div>
    )
}
export default Home;