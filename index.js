function Skybox(opts) {
  if (!(this instanceof Skybox)) return new Skybox(opts || {});
  this.scene = opts.scene;
  this.skybox_size = opts.skybox_size || 200.0;
  this.skybox_path = opts.skybox_path;
  this.skybox_name = opts.skybox_name;

  // Setup skybox
  this.skybox = BABYLON.Mesh.CreateBox("skyBox", this.skybox_size, this.scene);
  this.skybox.renderingGroupId = 0;
  this.skybox.infiniteDistance = true;

  if (this.skybox_path && this.skybox_name) {
    this.set_skybox(this.skybox_name);
  }
}

module.exports = Skybox;

Skybox.prototype.get_skybox = function() {
  return this.skybox;
};

Skybox.prototype.set_skybox = function(skybox_name, skybox_path = this.skybox_path) {
  this.skybox_material = new BABYLON.StandardMaterial("skyBox", this.scene);
  this.skybox_material.backFaceCulling = false;
  this.skybox_material.disableLighting = true;
  this.skybox_material.diffuseColor = new BABYLON.Color3(0, 0, 0);
  this.skybox_material.specularColor = new BABYLON.Color3(0, 0, 0);

  this.skybox_material.reflectionTexture = new BABYLON.CubeTexture(skybox_path + skybox_name, this.scene);
  this.skybox_material.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;

  this.skybox.material = this.skybox_material;
};
