import { NextApiRequest, NextApiResponse } from "next";

type topPlayers = {
  playerOne: string;
  playerTwo: string;
  thirdPlayer: string;
};

type GameImages = {
  imageOne : string,
  imageTwo : string,
  imageThree : string
}

type GameData = {
  machineNumber : string;
  desc: string;
  img: string;
  isGameExist: boolean;
  topPlayers: topPlayers;
  gameImages : GameImages;
  timePlayed: string;
  maker: string;
  isUnity: boolean;
  arcadeMachineImage: string;
  color: string;
};

type ErrorData = {
  error: string;
};

interface OnSuccessApiResponse {
  responce: GameData | ErrorData;
}

const generateDataForCase = (caseIdentifier: string): GameData | ErrorData => {
  switch (caseIdentifier) {
    case "CoinFlip":
      return {
        machineNumber : "4",
        desc: "A coinflipgame",
        img: "/gamethu1.jpg",
        isGameExist: true,
        topPlayers: {
          playerOne: "",
          playerTwo: "",
          thirdPlayer: "",
        },
        gameImages : {
          imageOne : "",
          imageTwo : "",
          imageThree : ""
        },
        timePlayed: "20+",
        maker: "@marchedev",
        isUnity: false,
        arcadeMachineImage: "/ca44.png",
        color: "orange-400",
      };
    case "TowerDefence":
      return {
        machineNumber : "1",
        desc: "A TowerDefence Game",
        img: "/tower.jpg",
        isGameExist: true,
        topPlayers: {
          playerOne: "",
          playerTwo: "",
          thirdPlayer: "",
        },
        gameImages : {
          imageOne : "",
          imageTwo : "",
          imageThree : ""
        },
        timePlayed: "10+",
        maker: "@marchedev",
        isUnity: false,
        arcadeMachineImage: "/ca11.png",
        color: "red-500",
      };
    case "FourInLine":
      return {
        machineNumber : "6",
        desc: "A Four In Line Game",
        img: "/sf.png",
        isGameExist: true,
        topPlayers: {
          playerOne: "",
          playerTwo: "",
          thirdPlayer: "",
        },
        gameImages : {
          imageOne : "",
          imageTwo : "",
          imageThree : ""
        },
        timePlayed: "5+",
        maker: "@marchedev",
        isUnity: false,
        arcadeMachineImage: "/ca66.png",
        color: "blue-500",
      };
    case "MoleSmash":
      return {
        machineNumber : "2",
        desc: "A MoleSmash Game",
        img: "/molegame.jpeg",
        isGameExist: true,
        topPlayers: {
          playerOne: "",
          playerTwo: "",
          thirdPlayer: "",
        },
        gameImages : {
          imageOne : "",
          imageTwo : "",
          imageThree : ""
        },
        timePlayed: "6+",
        maker: "@benzonak",
        isUnity: true,
        arcadeMachineImage: "/ca22.png",
        color: "orange-500",
      };
    case "SkylineSkaddle":
      return {
        machineNumber : "3",
        desc: "A SkylineSkaddle Game",
        img: "/skygame.jpg",
        isGameExist: true,
        topPlayers: {
          playerOne: "",
          playerTwo: "",
          thirdPlayer: "",
        },
        gameImages : {
          imageOne : "",
          imageTwo : "",
          imageThree : ""
        },
        timePlayed: "15+",
        maker: "@benzonak",
        isUnity: true,
        arcadeMachineImage: "/ca33.png",
        color: "green-400",
      };
    case "TileSurvive":
      return {
        machineNumber : "5",
        desc: "A TileSurvive Game",
        img: "/tile.jpg",
        isGameExist: true,
        topPlayers: {
          playerOne: "",
          playerTwo: "",
          thirdPlayer: "",
        },
        gameImages : {
          imageOne : "",
          imageTwo : "",
          imageThree : ""
        },
        timePlayed: "6+",
        maker: "@benzonak",
        isUnity: true,
        arcadeMachineImage: "/ca55.png",
        color: "green-400",
      };
    default:
      return {
        error: "Not A Valid Key",
      };
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const responce = generateDataForCase(req.query.game as string | undefined);
  const responseData: OnSuccessApiResponse = { responce };
  res.json(responseData);
}

//const { game } = req.query;
//const gameIdentifier = Array.isArray(game) ? game[0] : game;
