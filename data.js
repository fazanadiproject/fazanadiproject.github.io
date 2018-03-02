var APP_DATA = {
  "scenes": [
    {
      "id": "0-hutan-tropis",
      "name": "Hutan Tropis",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "1-hutan-mangrove"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2177281750647175,
          "pitch": -0.03619448168674211,
          "title": "Info 1",
          "text": "Lorem Ipsum dolor sit amet"
        },
        {
          "yaw": 2.7796254257716786,
          "pitch": -0.34563027740979635,
          "title": "Info 2",
          "text": "Lorem Ipsum dolor sit amet"
        },
        {
          "yaw": -2.1329807073443945,
          "pitch": 0.3224315341091142,
          "title": "Info 3",
          "text": "Lorem Ipsum dolor sit amet"
        }
      ]
    },
    {
      "id": "1-hutan-mangrove",
      "name": "Hutan Mangrove",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1792,
      "initialViewParameters": {
        "yaw": 0.6185874558516726,
        "pitch": -0.14503714105831556,
        "fov": 1.343902234462253
      },
      "linkHotspots": [
        {
          "yaw": 0.591596133392752,
          "pitch": 0.06527471426919718,
          "rotation": 0,
          "target": "0-hutan-tropis"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1545307766516615,
          "pitch": -0.06620714813361417,
          "title": "Infooo2",
          "text": "Lorem Ipsum dolor sit amet"
        },
        {
          "yaw": 3.0178279259133234,
          "pitch": 0.002863801826572754,
          "title": "Checking",
          "text": "Lorem Ipsum dolor sit amet"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
