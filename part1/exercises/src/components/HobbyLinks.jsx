export default function HobbyLinks() {
    let hobbyLinks = ["https://www.guitarcenter.com/", "https://store.steampowered.com/"]
    return(
        <div>
            <h3 style={{padding: '3px'}}>My Hobbies</h3>
            <a href = {hobbyLinks[0]}>Guitar Center</a>
            <br />
            <a href = {hobbyLinks[1]}>Steam</a>
        </div>
    )
}