/* eslint-env mocha */
'use strict'

const path = require('path')
const expect = require('chai').expect

const pathTo = path.join(__dirname, 'Dummy')
const id64 = '76561198067577712'
const accountID = '107311984'
const platform = require('os').platform()

const makeDummy = require('steam-dummy')
const steamPaths = require('./../lib/paths.js')

steamPaths.id64 = id64
steamPaths.account = accountID
steamPaths.root = pathTo

describe('Module paths @notreq', function pathsDescriptor () {
  this.slow(0)

  before(async function initDummy () {
    await makeDummy(pathTo)
  })

  it('should be initialized by require\'ing it', function initsOnReq () {
    expect(steamPaths).to.have.property('config')
  })

  it('should have a lot of "properties"', function hasALotOfProps () {
    expect(steamPaths).to.have.property('root')
    expect(steamPaths).to.have.property('id64')
    expect(steamPaths).to.have.property('account')
    expect(steamPaths).to.have.property('all')
    expect(steamPaths).to.have.property('appinfo')
    expect(steamPaths).to.have.property('config')
    expect(steamPaths).to.have.property('libraryfolders')
    expect(steamPaths).to.have.property('localconfig')
    expect(steamPaths).to.have.property('loginusers')
    expect(steamPaths).to.have.property('registry')
    expect(steamPaths).to.have.property('sharedconfig')
    expect(steamPaths).to.have.property('shortcuts')
    expect(steamPaths).to.have.property('skins')
    expect(steamPaths).to.have.property('app')
    expect(steamPaths).to.have.property('steamapps')
  })

  it('should return proper values/paths', function properPaths () {
    expect(steamPaths.root).to.equal(pathTo)
    expect(steamPaths.id64).to.equal(id64)
    expect(steamPaths.appinfo).to.equal(
      platform === 'linux'
        ? path.join(pathTo, 'steam', 'appcache', 'appinfo.vdf')
        : path.join(pathTo, 'appcache', 'appinfo.vdf')
    )
    expect(steamPaths.config).to.equal(
      platform === 'linux'
        ? path.join(pathTo, 'steam', 'config', 'config.vdf')
        : path.join(pathTo, 'config', 'config.vdf')
    )
    expect(steamPaths.libraryfolders).to.equal(
      platform === 'linux'
        ? path.join(pathTo, 'steam', 'steamapps', 'libraryfolders.vdf')
        : path.join(pathTo, 'steamapps', 'libraryfolders.vdf')
    )
    expect(steamPaths.localconfig).to.equal(
      platform === 'linux'
        ? path.join(pathTo, 'steam', 'userdata', accountID, 'config', 'localconfig.vdf')
        : path.join(pathTo, 'userdata', accountID, 'config', 'localconfig.vdf')
    )
    expect(steamPaths.loginusers).to.equal(
      platform === 'linux'
        ? path.join(pathTo, 'steam', 'config', 'loginusers.vdf')
        : path.join(pathTo, 'config', 'loginusers.vdf')
    )
    expect(steamPaths.registry).to.equal(
      platform !== 'win32'
        ? path.join(pathTo, 'registry.vdf')
        : path.join('registry.winreg')
    )
    expect(steamPaths.sharedconfig).to.equal(
      platform === 'linux'
        ? path.join(pathTo, 'steam', 'userdata', accountID, '7', 'remote', 'sharedconfig.vdf')
        : path.join(pathTo, 'userdata', accountID, '7', 'remote', 'sharedconfig.vdf')
    )
    expect(steamPaths.shortcuts).to.equal(
      platform === 'linux'
        ? path.join(pathTo, 'steam', 'userdata', accountID, 'config', 'shortcuts.vdf')
        : path.join(pathTo, 'userdata', accountID, 'config', 'shortcuts.vdf')
    )
    expect(steamPaths.skins).to.equal(
      platform !== 'darwin'
        ? path.join(pathTo, 'skins')
        : path.join(pathTo, 'Steam.AppBundle', 'Steam', 'Contents', 'MacOS', 'skins')
    )
    expect(steamPaths.steamapps()).to.be.a('object').and.have.property('apps').and.be.a('array').and.have.length(2)

    const appPath = steamPaths.steamapps().apps[ 0 ]
    expect(appPath).to.be.a('string')
    expect(steamPaths.app(appPath.replace(/.*?appmanifest_(\d+).acf$/, '$1'))).to.equal(appPath)
    expect(steamPaths.app(appPath.replace(/.*?appmanifest_(\d+).acf$/, '$1'), path.join(steamPaths.root, 'steamapps')))
  })
})
