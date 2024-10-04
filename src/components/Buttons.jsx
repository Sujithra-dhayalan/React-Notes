//explains about the onclick event
function Button() {

    const handleClick = () => {
        console.log("blahh")
    }

    const clicking = (name) => {
        console.log(`${name} you just clicked me!!`)
    }

    let count = 0
    const countClick = (name) => {
        count++
        count <= 3 ? console.log(`${name} you clicked me ${count} times`) : console.log("stop clicking me")
    }

    const click = (e) => {
        e.target.textContent = "Bro stop!"
    }

    const double = (e) => {
        e.target.textContent = "this is diff!"
    }

    return (
        <>
            <div>
                <button type="button" onClick={handleClick}>Click me</button>

                <button type="button" onClick={() => clicking("sujithra")}>Click me</button>

                <button type="button" onClick={() => countClick("sujithra")}>Click me</button>

                <button type="button" onClick={(e) => click(e)}>Click me</button>

                <button type="button" onDoubleClick={(e) => double(e)}>Click me</button>
            </div>

        </>
    )

}

export default Button;