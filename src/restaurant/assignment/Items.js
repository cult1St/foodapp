export const Items = ({val, i})=>{
    return(<tr>
        <td>{i+1}</td>
        <td>{val.author}</td>
        <td>{val.text}</td>
    </tr>
)
}