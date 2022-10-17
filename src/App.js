import React from "react";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.toggleHidden = this.toggleHidden.bind(this);
		this.setImageSize = this.setImageSize.bind(this);
		this.handleHiddenSexButton = this.handleHiddenSexButton.bind(this);

		this.sources = [
			["Aatrox.png", "m"],
			["Ahri.png", "f"],
			["Akali.png", "f"],
			["Akshan.png", "m"],
			["Alistar.png", "m"],
			["Amumu.png", "m"],
			["Anivia.png", "f"],
			["Annie.png", "f"],
			["Aphelios.png", "m"],
			["Ashe.png", "f"],
			["AurelionSol.png", "m"],
			["Azir.png", "m"],
			["Bard.png", "m"],
			["Belveth.png", "f"],
			["Blitzcrank.png", "o"],
			["Brand.png", "m"],
			["Braum.png", "m"],
			["Caitlyn.png", "f"],
			["Camille.png", "f"],
			["Cassiopeia.png", "f"],
			["Chogath.png", "m"],
			["Corki.png", "m"],
			["Darius.png", "m"],
			["Diana.png", "f"],
			["Draven.png", "m"],
			["DrMundo.png", "m"],
			["Ekko.png", "m"],
			["Elise.png", "f"],
			["Evelynn.png", "f"],
			["Ezreal.png", "m"],
			["Fiddlesticks.png", "o"],
			["Fiora.png", "f"],
			["Fizz.png", "m"],
			["Galio.png", "m"],
			["Gangplank.png", "m"],
			["Garen.png", "m"],
			["Gnar.png", "m"],
			["Gragas.png", "m"],
			["Graves.png", "m"],
			["Gwen.png", "f"],
			["Hecarim.png", "m"],
			["Heimerdinger.png", "m"],
			["Illaoi.png", "f"],
			["Irelia.png", "f"],
			["Ivern.png", "m"],
			["Janna.png", "f"],
			["JarvanIV.png", "m"],
			["Jax.png", "m"],
			["Jayce.png", "m"],
			["Jhin.png", "m"],
			["Jinx.png", "f"],
			["Kaisa.png", "f"],
			["Kalista.png", "f"],
			["Karma.png", "f"],
			["Karthus.png", "m"],
			["Kassadin.png", "m"],
			["Katarina.png", "f"],
			["Kayle.png", "f"],
			["Kayn.png", "m"],
			["Kennen.png", "m"],
			["Khazix.png", "m"],
			["Kindred.png", "o"],
			["Kled.png", "m"],
			["KogMaw.png", "m"],
			["Leblanc.png", "f"],
			["LeeSin.png", "m"],
			["Leona.png", "f"],
			["Lillia.png", "f"],
			["Lissandra.png", "f"],
			["Lucian.png", "m"],
			["Lulu.png", "f"],
			["Lux.png", "f"],
			["Malphite.png", "m"],
			["Malzahar.png", "m"],
			["Maokai.png", "m"],
			["MasterYi.png", "m"],
			["MissFortune.png", "f"],
			["MonkeyKing.png", "m"],
			["Mordekaiser.png", "m"],
			["Morgana.png", "f"],
			["Nami.png", "f"],
			["Nasus.png", "m"],
			["Nautilus.png", "m"],
			["Neeko.png", "f"],
			["Nidalee.png", "f"],
			["Nilah.png", "f"],
			["Nocturne.png", "m"],
			["Nunu.png", "m"],
			["Olaf.png", "m"],
			["Orianna.png", "f"],
			["Ornn.png", "m"],
			["Pantheon.png", "m"],
			["Poppy.png", "f"],
			["Pyke.png", "m"],
			["Qiyana.png", "f"],
			["Quinn.png", "f"],
			["Rakan.png", "m"],
			["Rammus.png", "m"],
			["RekSai.png", "f"],
			["Rell.png", "f"],
			["Renata.png", "f"],
			["Renekton.png", "m"],
			["Rengar.png", "m"],
			["Riven.png", "f"],
			["Rumble.png", "m"],
			["Ryze.png", "m"],
			["Samira.png", "f"],
			["Sejuani.png", "f"],
			["Senna.png", "f"],
			["Seraphine.png", "f"],
			["Sett.png", "m"],
			["Shaco.png", "m"],
			["Shen.png", "m"],
			["Shyvana.png", "f"],
			["Singed.png", "m"],
			["Sion.png", "m"],
			["Sivir.png", "f"],
			["Skarner.png", "m"],
			["Sona.png", "f"],
			["Soraka.png", "f"],
			["Swain.png", "m"],
			["Sylas.png", "m"],
			["Syndra.png", "f"],
			["TahmKench.png", "m"],
			["Taliyah.png", "f"],
			["Talon.png", "m"],
			["Taric.png", "m"],
			["Teemo.png", "m"],
			["Thresh.png", "m"],
			["Tristana.png", "f"],
			["Trundle.png", "m"],
			["Tryndamere.png", "m"],
			["TwistedFate.png", "m"],
			["Twitch.png", "m"],
			["Udyr.png", "m"],
			["Urgot.png", "m"],
			["Varus.png", "m"],
			["Vayne.png", "f"],
			["Veigar.png", "m"],
			["Velkoz.png", "m"],
			["Vex.png", "f"],
			["Vi.png", "f"],
			["Viego.png", "m"],
			["Viktor.png", "m"],
			["Vladimir.png", "m"],
			["Volibear.png", "m"],
			["Warwick.png", "m"],
			["Xayah.png", "f"],
			["Xerath.png", "m"],
			["XinZhao.png", "m"],
			["Yasuo.png", "m"],
			["Yone.png", "m"],
			["Yorick.png", "m"],
			["Yuumi.png", "f"],
			["Zac.png", "m"],
			["Zed.png", "m"],
			["Zeri.png", "f"],
			["Ziggs.png", "m"],
			["Zilean.png", "m"],
			["Zoe.png", "f"],
			["Zyra.png", "f"],
		];

		this.refs = [];
		this.sources.forEach(() => {
			this.refs.push(React.createRef());
		});
		this.state = {
			hidden: false,
			refs: this.refs,
			hiddenSex: [],
		};
	}

	handleHiddenSexButton(sex) {
		var helperArray = this.state.hiddenSex;
		if (this.state.hiddenSex.includes(sex)) {
			helperArray = helperArray.filter((item) => item !== sex);
		} else {
			helperArray = helperArray.concat(sex);
		}
		this.state.refs.forEach((ref) => ref.current.setHiddenSex(helperArray));
		this.setState({ hiddenSex: helperArray });
	}

	toggleHidden() {
		this.setState({ hidden: !this.state.hidden });
		this.state.refs.forEach((ref) => ref.current.toggleHidden());
	}

	setImageSize(event) {
		this.state.refs.forEach((ref) => ref.current.setImageSize(event.target.value));
	}

	render() {
		return (
			<div className="container">
				<div>
					<button onClick={this.toggleHidden}>
						{this.state.hidden ? "Show excluded champions" : "Hide excluded champions"}
					</button>
					<br />
					<input
						id="typeinp"
						type="range"
						min="10"
						max="230"
						defaultValue={120}
						step="10"
						onChange={this.setImageSize}
						style={{ minWidth: "20%" }}
					/>
					<div>
						<button onClick={() => this.handleHiddenSexButton("m")}>
							{this.state.hiddenSex.includes("m") ? "Show Male" : "Hide Male"}
						</button>
						<button
							onClick={() => this.handleHiddenSexButton("f")}
							style={{ marginLeft: "10px", marginRight: "10px" }}
						>
							{this.state.hiddenSex.includes("f") ? "Show Female" : "Hide Female"}
						</button>
						<button onClick={() => this.handleHiddenSexButton("o")}>
							{this.state.hiddenSex.includes("o") ? "Show Other" : "Hide Other"}
						</button>
					</div>
				</div>
				<div>
					{this.sources.map((item, index) => (
						<ChampionImage data={item[0]} ref={this.state.refs[index]} key={item[0]} sex={item[1]} />
					))}
				</div>
			</div>
		);
	}
}

class ChampionImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: true,
			hidden: false,
			imageSize: 100,
			sex: this.props.sex,
			hiddenSex: [],
		};
		this.toggleClass = this.toggleClass.bind(this);
		this.toggleHidden = this.toggleHidden.bind(this);
		this.setImageSize = this.setImageSize.bind(this);
		this.setHiddenSex = this.setHiddenSex.bind(this);
	}

	setHiddenSex(hiddenSex) {
		this.setState({ hiddenSex: hiddenSex });
	}

	toggleClass() {
		this.setState({ active: !this.state.active });
	}

	toggleHidden() {
		this.setState({ hidden: !this.state.hidden });
	}

	setImageSize(size) {
		this.setState({ imageSize: size });
	}

	render() {
		var classes = "";
		classes += this.state.active ? "selectedImage" : "unselectedImage";
		classes +=
			(this.state.hidden && !this.state.active) || this.state.hiddenSex.includes(this.state.sex)
				? " hiddenImage"
				: "";

		return (
			<img
				width={this.state.imageSize}
				height={this.state.imageSize}
				key={this.props.data}
				src={require("./assets/" + this.props.data)}
				onClick={this.toggleClass}
				className={classes}
			/>
		);
	}
}

export default App;
