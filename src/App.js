import React from "react";
import "./App.css";
import { func } from "prop-types";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.toggleHidden = this.toggleHidden.bind(this);
		this.setImageSize = this.setImageSize.bind(this);

		this.sources = [
			"Aatrox.png",
			"Ahri.png",
			"Akali.png",
			"Akshan.png",
			"Alistar.png",
			"Amumu.png",
			"Anivia.png",
			"Annie.png",
			"Aphelios.png",
			"Ashe.png",
			"AurelionSol.png",
			"Azir.png",
			"Bard.png",
			"Belveth.png",
			"Blitzcrank.png",
			"Brand.png",
			"Braum.png",
			"Caitlyn.png",
			"Camille.png",
			"Cassiopeia.png",
			"Chogath.png",
			"Corki.png",
			"Darius.png",
			"Diana.png",
			"Draven.png",
			"DrMundo.png",
			"Ekko.png",
			"Elise.png",
			"Evelynn.png",
			"Ezreal.png",
			"Fiddlesticks.png",
			"Fiora.png",
			"Fizz.png",
			"Galio.png",
			"Gangplank.png",
			"Garen.png",
			"Gnar.png",
			"Gragas.png",
			"Graves.png",
			"Gwen.png",
			"Hecarim.png",
			"Heimerdinger.png",
			"Illaoi.png",
			"Irelia.png",
			"Ivern.png",
			"Janna.png",
			"JarvanIV.png",
			"Jax.png",
			"Jayce.png",
			"Jhin.png",
			"Jinx.png",
			"Kaisa.png",
			"Kalista.png",
			"Karma.png",
			"Karthus.png",
			"Kassadin.png",
			"Katarina.png",
			"Kayle.png",
			"Kayn.png",
			"Kennen.png",
			"Khazix.png",
			"Kindred.png",
			"Kled.png",
			"KogMaw.png",
			"Leblanc.png",
			"LeeSin.png",
			"Leona.png",
			"Lillia.png",
			"Lissandra.png",
			"Lucian.png",
			"Lulu.png",
			"Lux.png",
			"Malphite.png",
			"Malzahar.png",
			"Maokai.png",
			"MasterYi.png",
			"MissFortune.png",
			"MonkeyKing.png",
			"Mordekaiser.png",
			"Morgana.png",
			"Nami.png",
			"Nasus.png",
			"Nautilus.png",
			"Neeko.png",
			"Nidalee.png",
			"Nilah.png",
			"Nocturne.png",
			"Nunu.png",
			"Olaf.png",
			"Orianna.png",
			"Ornn.png",
			"Pantheon.png",
			"Poppy.png",
			"Pyke.png",
			"Qiyana.png",
			"Quinn.png",
			"Rakan.png",
			"Rammus.png",
			"RekSai.png",
			"Rell.png",
			"Renata.png",
			"Renekton.png",
			"Rengar.png",
			"Riven.png",
			"Rumble.png",
			"Ryze.png",
			"Samira.png",
			"Sejuani.png",
			"Senna.png",
			"Seraphine.png",
			"Sett.png",
			"Shaco.png",
			"Shen.png",
			"Shyvana.png",
			"Singed.png",
			"Sion.png",
			"Sivir.png",
			"Skarner.png",
			"Sona.png",
			"Soraka.png",
			"Swain.png",
			"Sylas.png",
			"Syndra.png",
			"TahmKench.png",
			"Taliyah.png",
			"Talon.png",
			"Taric.png",
			"Teemo.png",
			"Thresh.png",
			"Tristana.png",
			"Trundle.png",
			"Tryndamere.png",
			"TwistedFate.png",
			"Twitch.png",
			"Udyr.png",
			"Urgot.png",
			"Varus.png",
			"Vayne.png",
			"Veigar.png",
			"Velkoz.png",
			"Vex.png",
			"Vi.png",
			"Viego.png",
			"Viktor.png",
			"Vladimir.png",
			"Volibear.png",
			"Warwick.png",
			"Xayah.png",
			"Xerath.png",
			"XinZhao.png",
			"Yasuo.png",
			"Yone.png",
			"Yorick.png",
			"Yuumi.png",
			"Zac.png",
			"Zed.png",
			"Zeri.png",
			"Ziggs.png",
			"Zilean.png",
			"Zoe.png",
			"Zyra.png",
		];

		this.refs = [];
		this.sources.forEach(() => {
			this.refs.push(React.createRef());
		});
		this.state = {
			hidden: false,
			refs: this.refs,
		};
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
				</div>
				<div>
					{this.sources.map((item, index) => (
						<ChampionImage data={item} ref={this.state.refs[index]} key={item} />
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
		};
		this.toggleClass = this.toggleClass.bind(this);
		this.toggleHidden = this.toggleHidden.bind(this);
		this.setImageSize = this.setImageSize.bind(this);
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
		classes += this.state.hidden && !this.state.active ? " hiddenImage" : "";

		return (
			<img
				width={this.state.imageSize}
				height={this.state.imageSize}
				key={this.champion}
				src={require("./assets/" + this.props.data)}
				onClick={this.toggleClass}
				className={classes}
			/>
		);
	}
}

export default App;
