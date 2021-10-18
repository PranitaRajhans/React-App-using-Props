
function Card(props) {
    return (

        <div class="container-sm w-60 mx-auto">
            <br /><br />
            <div class="card mx-auto">
                <img className="imgSize mx-auto"
                    src={props.imgsrc}
                    alt="Card demos"
                    width="65%"
                    height="200"
                />
                <div class="card-body">
                    <h4 class="card-title mx-auto">{props.title}</h4>
                    <a href={props.link} class="btn stretched-link">
                        <button class="mx-auto">Go To Site</button>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Card;