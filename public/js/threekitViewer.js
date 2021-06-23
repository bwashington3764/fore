window.threekitPlayer({
  authToken: 'c4babf6c-aff9-4448-81a0-7fef4b2ac7b9', //https://foreproject.herokuapp.com/
  el: document.getElementById("player"),
  stageId: '3ca203de-36dc-4305-90cc-4af740a466d0',
  assetId: 'c88625bb-3cdc-417f-ae3e-702f023325d2', //sofa
  showConfigurator: true,
  showAR: true
}).then(async api => {
  window.player = api;
  window.configurator = await api.getConfigurator();
});

