const styleCard = {
  backgroundColor: "#f0f0f0",
};

export const RestaurentCard = (props) => {
  console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuh5-mItCuAUBX7APK67gk4N3adkajqKzBw&s"
      />
      <h4>{props.resName}</h4>
      <h3>{props.rating}</h3>
    </div>
  );
};
