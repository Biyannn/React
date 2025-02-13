// eslint-disable-next-line react/prop-typer
const Container = ({title, desc}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{!!desc && <p>{desc}</p>}</p>
        </div>
    )
}

export default Container