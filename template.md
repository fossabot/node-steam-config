<body>
<style>
  * {
    font-family: Times New Roman;
  }
  h1, h2 {
    text-align: center;
  }
</style>
<body>


# **`Project Name` API Documentation** <br />Version `#.#.#`


## ------------


### **[Table of Contents]()**

* [SteamConfig]() `Module`
 * [Properties](#properties)
   * [append]()
   * [paths]()
   * [appinfo]()
   * [config]()
   * [libraryfolders]()
   * [localconfig]()
   * [loginusers]()
   * [skins]()
   * [apps]()
 * [Methods]()
   * `async` [findUser (identifier)]()
   * `async` [load (files)]()
   * `async` [save (files)]()
   * `async` [detectRoot (auto)]()
   * `async` [detectUser (auto)]()
   * [setRoot (to)]()
   * [setUser (to)]()
* [SteamPaths]() `Module`
 * [SteamPaths]() `Class`
  * [Properties]()
  * [Methods]()
   * `async` [function (arg)]()
* [SteamUtils]()

----

## [Properties](properties)

| Name | Type | Description |
| --- | --- | --- |
| append | `Boolean` | Append loaded apps to `this.steamapps` if true, or overwrite it if false. |
| paths | [`SteamPaths`]() | An instance of the SteamPaths class. |
| appinfo | <code>string</code> | Value of Binary VDF file appinfo.vdf. |
| config | <code>string</code> | Value of Text VDF file config.vdf. |
| libraryfolders | <code>string</code> | Value of Text VDF file libraryfolders.vdf. |
| localconfig | <code>string</code> | Value of the user-specific Text VDF file localconfig.vdf. |
| loginusers | <code>string</code> | Value of Text VDF file loginusers.vdf. |
| skins | <code>Array</code> | Array of names of skin folders as strings. |
| apps | <code>Array</code> | Array of appmanifest_#.acf (Text VDF) file(s) loaded from Steam Library Folder(s). |


----


## [Methods](#methods)

## ----------------

### [SteamConfig.findUser(identifier)](#findUser) ⇒ `Object`

Attempt to find the user `identifier` in the `loginusers`.

> **Arguments**

`identifier` *is a* `String` <br />
The value to search for to find the user. Can be a Steam ID64, Steam3::account ID, persona name, or account name.


> **Returns** <code>Object</code>

An object containing `{id64: #, accountId: #}` if the user is found, or an empty object if not.


## ----------------


### SteamConfig~load(files)
Load Steam configuration data files by path and store the data in it's place on SteamConfig. The internal function beforeLoad is used to organize the entries to ensure proper load order. The internal function afterLoad is run on each file after it's been loaded to automatically handle cleaning some of the data such as the useless values in `libraryfolders.vdf` and `loginusers.vdf`.

**Kind**: inner method of [<code>SteamConfig</code>](#module_SteamConfig)  
**Throws**:

- <code>Error</code> - If entries is an invalid arg (non-String & non-Array), or any of the entries are not a valid file/path as per SteamPaths.


| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array</code> | A string for a single file/path, or an array for a collection of files/paths. |


## ----------------


<a name="module_SteamConfig..save"></a>

### SteamConfig~save(files)
Save Steam configuration data files by path.

**Kind**: inner method of [<code>SteamConfig</code>](#module_SteamConfig)  
**Throws**:

- <code>Error</code> - If entries is an invalid arg (non-String & non-Array), or any of the entries are not a valid file/path as per SteamPaths.


| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array</code> | A string for a single file/path, or an array for a collection of files/paths. |

<a name="module_SteamConfig..detectRoot"></a>

### SteamConfig~detectRoot(auto) ⇒ <code>Path</code>
Attempt to detect the root installation path based on platform-specific default installation locations, or the value SteamPath from the registry on Windows. Will also set the path if autoSet is true.

**Kind**: inner method of [<code>SteamConfig</code>](#module_SteamConfig)  
**Returns**: <code>Path</code> - - If autoSet is false: if a path is detected it is returned, otherwise returns null if the default path is not found or does not exist.  
**Throws**:

- <code>Error</code> - If the current OS is not supported.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| auto | <code>boolean</code> | <code>false</code> | Whether to automatically set the root path; if false the detected path will be returned instead of setting it. |

<a name="module_SteamConfig..detectUser"></a>

### SteamConfig~detectUser(auto) ⇒ <code>String</code>
Attempt to detect the user of the Steam installation from (in order) the active user, the mostrecent user, or the only user.

**Kind**: inner method of [<code>SteamConfig</code>](#module_SteamConfig)  
**Returns**: <code>String</code> - - If auto is false: if a user is detected it is returned, otherwise returns null.  
**Throws**:

- <code>Error</code> - If the current OS is not supported.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| auto | <code>boolean</code> | <code>false</code> | Whether to automatically set the detected user as the active user of SteamConfig; if false the detected user will be returned instead of setting it. |

<a name="module_SteamConfig..setRoot"></a>

### SteamConfig~setRoot(to)
Attempt to set the root path of the Steam installation.

**Kind**: inner method of [<code>SteamConfig</code>](#module_SteamConfig)  
**Throws**:

- <code>Error</code> - If to is an invalid path, or if the path is not a valid Steam installation.


| Param | Type | Description |
| --- | --- | --- |
| to | <code>Path</code> | The path to set as the root. |

<a name="module_SteamConfig..setUser"></a>

### SteamConfig~setUser(to)
Attempt to set the root path of the Steam installation.

**Kind**: inner method of [<code>SteamConfig</code>](#module_SteamConfig)  
**Throws**:

- <code>Error</code> - If to is an invalid path, or if the path is not a valid Steam installation.


| Param | Type | Description |
| --- | --- | --- |
| to | <code>Path</code> | The path to set as the root. |

Done in 0.33s.
