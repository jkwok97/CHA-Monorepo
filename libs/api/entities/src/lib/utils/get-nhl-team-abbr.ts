import { NhlTeamEnum } from '../enums';

export function getNhlTeamAbbr(teamName: string) {
  switch (teamName) {
    case 'Anaheim Ducks':
      return NhlTeamEnum['Anaheim Ducks'];
    case 'Boston Bruins':
      return NhlTeamEnum['Boston Bruins'];
    case 'Buffalo Sabres':
      return NhlTeamEnum['Buffalo Sabres'];
    case 'Calgary Flames':
      return NhlTeamEnum['Calgary Flames'];
    case 'Carolina Hurricanes':
      return NhlTeamEnum['Carolina Hurricanes'];
    case 'Chicago Blackhawks':
      return NhlTeamEnum['Chicago Blackhawks'];
    case 'Colorado Avalanche':
      return NhlTeamEnum['Colorado Avalanche'];
    case 'Columbus Blue Jackets':
      return NhlTeamEnum['Columbus Blue Jackets'];
    case 'Dallas Stars':
      return NhlTeamEnum['Dallas Stars'];
    case 'Detroit Red Wings':
      return NhlTeamEnum['Detroit Red Wings'];
    case 'Edmonton Oilers':
      return NhlTeamEnum['Edmonton Oilers'];
    case 'Florida Panthers':
      return NhlTeamEnum['Florida Panthers'];
    case 'Los Angeles Kings':
      return NhlTeamEnum['Los Angeles Kings'];
    case 'Minnesota Wild':
      return NhlTeamEnum['Minnesota Wild'];
    case 'Montreal Canadiens':
      return NhlTeamEnum['Montreal Canadiens'];
    case 'Nashville Predators':
      return NhlTeamEnum['Nashville Predators'];
    case 'New Jersey Devils':
      return NhlTeamEnum['New Jersey Devils'];
    case 'New York Islanders':
      return NhlTeamEnum['New York Islanders'];
    case 'New York Rangers':
      return NhlTeamEnum['New York Rangers'];
    case 'Ottawa Senators':
      return NhlTeamEnum['Ottawa Senators'];
    case 'Philadelphia Flyers':
      return NhlTeamEnum['Philadelphia Flyers'];
    case 'Pittsburgh Penguins':
      return NhlTeamEnum['Pittsburgh Penguins'];
    case 'San Jose Sharks':
      return NhlTeamEnum['San Jose Sharks'];
    case 'Seattle Kraken':
      return NhlTeamEnum['Seattle Kraken'];
    case 'St. Louis Blues':
      return NhlTeamEnum['St. Louis Blues'];
    case 'Tampa Bay Lightning':
      return NhlTeamEnum['Tampa Bay Lightning'];
    case 'Toronto Maple Leafs':
      return NhlTeamEnum['Toronto Maple Leafs'];
    case 'Vancouver Canucks':
      return NhlTeamEnum['Vancouver Canucks'];
    case 'Utah Mammoth':
      return NhlTeamEnum['Utah Mammoth'];
    case 'Vegas Golden Knights':
      return NhlTeamEnum['Vegas Golden Knights'];
    case 'Washington Capitals':
      return NhlTeamEnum['Washington Capitals'];
    case 'Winnipeg Jets':
      return NhlTeamEnum['Winnipeg Jets'];
    default:
      return null;
  }
}
