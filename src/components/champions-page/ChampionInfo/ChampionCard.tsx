import React from 'react'


interface ChampionImage {
    full: string,
    sprite: string,
    group: string,
    x: number,
    y: number,
    w: number,
    h: number
}

interface Champion {
    blurb: string,
    id: string,
    image: ChampionImage,
    info: {},
    key: string,
    partype: string,
    stats: {},
    tags: {},
    title: string,
    version: string
}



interface IChampionCardProps{
    champion: Champion
}


export default class ChampionCard extends React.Component<IChampionCardProps> {
    
    championId: string = this.props.champion.id;
    


    render() {

        return (
            <div className="cp-card">
                <img className="cp-card-img" alt={this.championId} src={`https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${this.championId}.png`} />
                <div className="cp-card-body">
                    <div className="cp-card-text">{this.championId}
                    </div>
                </div>
            </div>
        )
    }
}

