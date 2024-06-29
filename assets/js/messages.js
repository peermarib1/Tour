// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.EventPublish = (function() {

    /**
     * Properties of an EventPublish.
     * @exports IEventPublish
     * @interface IEventPublish
     * @property {number|Long} id EventPublish id
     * @property {string} name EventPublish name
     * @property {string} home EventPublish home
     * @property {string} away EventPublish away
     * @property {string|null} [detail] EventPublish detail
     * @property {string|null} [info] EventPublish info
     * @property {number|null} [minutes] EventPublish minutes
     * @property {number|null} [seconds] EventPublish seconds
     * @property {string|null} [status] EventPublish status
     * @property {Array.<IEventStatistic>|null} [statistics] EventPublish statistics
     * @property {Array.<IPlayer>|null} [players] EventPublish players
     * @property {Array.<IFallOfWicket>|null} [fallOfWickets] EventPublish fallOfWickets
     */

    /**
     * Constructs a new EventPublish.
     * @exports EventPublish
     * @classdesc Represents an EventPublish.
     * @implements IEventPublish
     * @constructor
     * @param {IEventPublish=} [properties] Properties to set
     */
    function EventPublish(properties) {
        this.statistics = [];
        this.players = [];
        this.fallOfWickets = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventPublish id.
     * @member {number|Long} id
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * EventPublish name.
     * @member {string} name
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.name = "";

    /**
     * EventPublish home.
     * @member {string} home
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.home = "";

    /**
     * EventPublish away.
     * @member {string} away
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.away = "";

    /**
     * EventPublish detail.
     * @member {string} detail
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.detail = "";

    /**
     * EventPublish info.
     * @member {string} info
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.info = "";

    /**
     * EventPublish minutes.
     * @member {number} minutes
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.minutes = 0;

    /**
     * EventPublish seconds.
     * @member {number} seconds
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.seconds = 0;

    /**
     * EventPublish status.
     * @member {string} status
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.status = "";

    /**
     * EventPublish statistics.
     * @member {Array.<IEventStatistic>} statistics
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.statistics = $util.emptyArray;

    /**
     * EventPublish players.
     * @member {Array.<IPlayer>} players
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.players = $util.emptyArray;

    /**
     * EventPublish fallOfWickets.
     * @member {Array.<IFallOfWicket>} fallOfWickets
     * @memberof EventPublish
     * @instance
     */
    EventPublish.prototype.fallOfWickets = $util.emptyArray;

    /**
     * Creates a new EventPublish instance using the specified properties.
     * @function create
     * @memberof EventPublish
     * @static
     * @param {IEventPublish=} [properties] Properties to set
     * @returns {EventPublish} EventPublish instance
     */
    EventPublish.create = function create(properties) {
        return new EventPublish(properties);
    };

    /**
     * Encodes the specified EventPublish message. Does not implicitly {@link EventPublish.verify|verify} messages.
     * @function encode
     * @memberof EventPublish
     * @static
     * @param {IEventPublish} message EventPublish message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventPublish.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.home);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.away);
        if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.detail);
        if (message.info != null && Object.hasOwnProperty.call(message, "info"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.info);
        if (message.minutes != null && Object.hasOwnProperty.call(message, "minutes"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.minutes);
        if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.seconds);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.status);
        if (message.statistics != null && message.statistics.length)
            for (var i = 0; i < message.statistics.length; ++i)
                $root.EventStatistic.encode(message.statistics[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.players != null && message.players.length)
            for (var i = 0; i < message.players.length; ++i)
                $root.Player.encode(message.players[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.fallOfWickets != null && message.fallOfWickets.length)
            for (var i = 0; i < message.fallOfWickets.length; ++i)
                $root.FallOfWicket.encode(message.fallOfWickets[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EventPublish message, length delimited. Does not implicitly {@link EventPublish.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EventPublish
     * @static
     * @param {IEventPublish} message EventPublish message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventPublish.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EventPublish message from the specified reader or buffer.
     * @function decode
     * @memberof EventPublish
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EventPublish} EventPublish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventPublish.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventPublish();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.home = reader.string();
                break;
            case 4:
                message.away = reader.string();
                break;
            case 5:
                message.detail = reader.string();
                break;
            case 6:
                message.info = reader.string();
                break;
            case 7:
                message.minutes = reader.int32();
                break;
            case 8:
                message.seconds = reader.int32();
                break;
            case 9:
                message.status = reader.string();
                break;
            case 10:
                if (!(message.statistics && message.statistics.length))
                    message.statistics = [];
                message.statistics.push($root.EventStatistic.decode(reader, reader.uint32()));
                break;
            case 11:
                if (!(message.players && message.players.length))
                    message.players = [];
                message.players.push($root.Player.decode(reader, reader.uint32()));
                break;
            case 12:
                if (!(message.fallOfWickets && message.fallOfWickets.length))
                    message.fallOfWickets = [];
                message.fallOfWickets.push($root.FallOfWicket.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        if (!message.hasOwnProperty("home"))
            throw $util.ProtocolError("missing required 'home'", { instance: message });
        if (!message.hasOwnProperty("away"))
            throw $util.ProtocolError("missing required 'away'", { instance: message });
        return message;
    };

    /**
     * Decodes an EventPublish message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EventPublish
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EventPublish} EventPublish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventPublish.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EventPublish message.
     * @function verify
     * @memberof EventPublish
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EventPublish.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
            return "id: integer|Long expected";
        if (!$util.isString(message.name))
            return "name: string expected";
        if (!$util.isString(message.home))
            return "home: string expected";
        if (!$util.isString(message.away))
            return "away: string expected";
        if (message.detail != null && message.hasOwnProperty("detail"))
            if (!$util.isString(message.detail))
                return "detail: string expected";
        if (message.info != null && message.hasOwnProperty("info"))
            if (!$util.isString(message.info))
                return "info: string expected";
        if (message.minutes != null && message.hasOwnProperty("minutes"))
            if (!$util.isInteger(message.minutes))
                return "minutes: integer expected";
        if (message.seconds != null && message.hasOwnProperty("seconds"))
            if (!$util.isInteger(message.seconds))
                return "seconds: integer expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isString(message.status))
                return "status: string expected";
        if (message.statistics != null && message.hasOwnProperty("statistics")) {
            if (!Array.isArray(message.statistics))
                return "statistics: array expected";
            for (var i = 0; i < message.statistics.length; ++i) {
                var error = $root.EventStatistic.verify(message.statistics[i]);
                if (error)
                    return "statistics." + error;
            }
        }
        if (message.players != null && message.hasOwnProperty("players")) {
            if (!Array.isArray(message.players))
                return "players: array expected";
            for (var i = 0; i < message.players.length; ++i) {
                var error = $root.Player.verify(message.players[i]);
                if (error)
                    return "players." + error;
            }
        }
        if (message.fallOfWickets != null && message.hasOwnProperty("fallOfWickets")) {
            if (!Array.isArray(message.fallOfWickets))
                return "fallOfWickets: array expected";
            for (var i = 0; i < message.fallOfWickets.length; ++i) {
                var error = $root.FallOfWicket.verify(message.fallOfWickets[i]);
                if (error)
                    return "fallOfWickets." + error;
            }
        }
        return null;
    };

    /**
     * Creates an EventPublish message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EventPublish
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EventPublish} EventPublish
     */
    EventPublish.fromObject = function fromObject(object) {
        if (object instanceof $root.EventPublish)
            return object;
        var message = new $root.EventPublish();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.name != null)
            message.name = String(object.name);
        if (object.home != null)
            message.home = String(object.home);
        if (object.away != null)
            message.away = String(object.away);
        if (object.detail != null)
            message.detail = String(object.detail);
        if (object.info != null)
            message.info = String(object.info);
        if (object.minutes != null)
            message.minutes = object.minutes | 0;
        if (object.seconds != null)
            message.seconds = object.seconds | 0;
        if (object.status != null)
            message.status = String(object.status);
        if (object.statistics) {
            if (!Array.isArray(object.statistics))
                throw TypeError(".EventPublish.statistics: array expected");
            message.statistics = [];
            for (var i = 0; i < object.statistics.length; ++i) {
                if (typeof object.statistics[i] !== "object")
                    throw TypeError(".EventPublish.statistics: object expected");
                message.statistics[i] = $root.EventStatistic.fromObject(object.statistics[i]);
            }
        }
        if (object.players) {
            if (!Array.isArray(object.players))
                throw TypeError(".EventPublish.players: array expected");
            message.players = [];
            for (var i = 0; i < object.players.length; ++i) {
                if (typeof object.players[i] !== "object")
                    throw TypeError(".EventPublish.players: object expected");
                message.players[i] = $root.Player.fromObject(object.players[i]);
            }
        }
        if (object.fallOfWickets) {
            if (!Array.isArray(object.fallOfWickets))
                throw TypeError(".EventPublish.fallOfWickets: array expected");
            message.fallOfWickets = [];
            for (var i = 0; i < object.fallOfWickets.length; ++i) {
                if (typeof object.fallOfWickets[i] !== "object")
                    throw TypeError(".EventPublish.fallOfWickets: object expected");
                message.fallOfWickets[i] = $root.FallOfWicket.fromObject(object.fallOfWickets[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an EventPublish message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EventPublish
     * @static
     * @param {EventPublish} message EventPublish
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EventPublish.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.statistics = [];
            object.players = [];
            object.fallOfWickets = [];
        }
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.name = "";
            object.home = "";
            object.away = "";
            object.detail = "";
            object.info = "";
            object.minutes = 0;
            object.seconds = 0;
            object.status = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.home != null && message.hasOwnProperty("home"))
            object.home = message.home;
        if (message.away != null && message.hasOwnProperty("away"))
            object.away = message.away;
        if (message.detail != null && message.hasOwnProperty("detail"))
            object.detail = message.detail;
        if (message.info != null && message.hasOwnProperty("info"))
            object.info = message.info;
        if (message.minutes != null && message.hasOwnProperty("minutes"))
            object.minutes = message.minutes;
        if (message.seconds != null && message.hasOwnProperty("seconds"))
            object.seconds = message.seconds;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.statistics && message.statistics.length) {
            object.statistics = [];
            for (var j = 0; j < message.statistics.length; ++j)
                object.statistics[j] = $root.EventStatistic.toObject(message.statistics[j], options);
        }
        if (message.players && message.players.length) {
            object.players = [];
            for (var j = 0; j < message.players.length; ++j)
                object.players[j] = $root.Player.toObject(message.players[j], options);
        }
        if (message.fallOfWickets && message.fallOfWickets.length) {
            object.fallOfWickets = [];
            for (var j = 0; j < message.fallOfWickets.length; ++j)
                object.fallOfWickets[j] = $root.FallOfWicket.toObject(message.fallOfWickets[j], options);
        }
        return object;
    };

    /**
     * Converts this EventPublish to JSON.
     * @function toJSON
     * @memberof EventPublish
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EventPublish.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EventPublish;
})();

$root.EventStatistic = (function() {

    /**
     * Properties of an EventStatistic.
     * @exports IEventStatistic
     * @interface IEventStatistic
     * @property {string} teamName EventStatistic teamName
     * @property {Array.<IEventScore>|null} [scores] EventStatistic scores
     */

    /**
     * Constructs a new EventStatistic.
     * @exports EventStatistic
     * @classdesc Represents an EventStatistic.
     * @implements IEventStatistic
     * @constructor
     * @param {IEventStatistic=} [properties] Properties to set
     */
    function EventStatistic(properties) {
        this.scores = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventStatistic teamName.
     * @member {string} teamName
     * @memberof EventStatistic
     * @instance
     */
    EventStatistic.prototype.teamName = "";

    /**
     * EventStatistic scores.
     * @member {Array.<IEventScore>} scores
     * @memberof EventStatistic
     * @instance
     */
    EventStatistic.prototype.scores = $util.emptyArray;

    /**
     * Creates a new EventStatistic instance using the specified properties.
     * @function create
     * @memberof EventStatistic
     * @static
     * @param {IEventStatistic=} [properties] Properties to set
     * @returns {EventStatistic} EventStatistic instance
     */
    EventStatistic.create = function create(properties) {
        return new EventStatistic(properties);
    };

    /**
     * Encodes the specified EventStatistic message. Does not implicitly {@link EventStatistic.verify|verify} messages.
     * @function encode
     * @memberof EventStatistic
     * @static
     * @param {IEventStatistic} message EventStatistic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventStatistic.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.teamName);
        if (message.scores != null && message.scores.length)
            for (var i = 0; i < message.scores.length; ++i)
                $root.EventScore.encode(message.scores[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EventStatistic message, length delimited. Does not implicitly {@link EventStatistic.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EventStatistic
     * @static
     * @param {IEventStatistic} message EventStatistic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventStatistic.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EventStatistic message from the specified reader or buffer.
     * @function decode
     * @memberof EventStatistic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EventStatistic} EventStatistic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventStatistic.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStatistic();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.teamName = reader.string();
                break;
            case 2:
                if (!(message.scores && message.scores.length))
                    message.scores = [];
                message.scores.push($root.EventScore.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("teamName"))
            throw $util.ProtocolError("missing required 'teamName'", { instance: message });
        return message;
    };

    /**
     * Decodes an EventStatistic message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EventStatistic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EventStatistic} EventStatistic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventStatistic.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EventStatistic message.
     * @function verify
     * @memberof EventStatistic
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EventStatistic.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.teamName))
            return "teamName: string expected";
        if (message.scores != null && message.hasOwnProperty("scores")) {
            if (!Array.isArray(message.scores))
                return "scores: array expected";
            for (var i = 0; i < message.scores.length; ++i) {
                var error = $root.EventScore.verify(message.scores[i]);
                if (error)
                    return "scores." + error;
            }
        }
        return null;
    };

    /**
     * Creates an EventStatistic message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EventStatistic
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EventStatistic} EventStatistic
     */
    EventStatistic.fromObject = function fromObject(object) {
        if (object instanceof $root.EventStatistic)
            return object;
        var message = new $root.EventStatistic();
        if (object.teamName != null)
            message.teamName = String(object.teamName);
        if (object.scores) {
            if (!Array.isArray(object.scores))
                throw TypeError(".EventStatistic.scores: array expected");
            message.scores = [];
            for (var i = 0; i < object.scores.length; ++i) {
                if (typeof object.scores[i] !== "object")
                    throw TypeError(".EventStatistic.scores: object expected");
                message.scores[i] = $root.EventScore.fromObject(object.scores[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an EventStatistic message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EventStatistic
     * @static
     * @param {EventStatistic} message EventStatistic
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EventStatistic.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.scores = [];
        if (options.defaults)
            object.teamName = "";
        if (message.teamName != null && message.hasOwnProperty("teamName"))
            object.teamName = message.teamName;
        if (message.scores && message.scores.length) {
            object.scores = [];
            for (var j = 0; j < message.scores.length; ++j)
                object.scores[j] = $root.EventScore.toObject(message.scores[j], options);
        }
        return object;
    };

    /**
     * Converts this EventStatistic to JSON.
     * @function toJSON
     * @memberof EventStatistic
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EventStatistic.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EventStatistic;
})();

$root.EventScore = (function() {

    /**
     * Properties of an EventScore.
     * @exports IEventScore
     * @interface IEventScore
     * @property {string} value EventScore value
     * @property {string} name EventScore name
     * @property {string|null} [info] EventScore info
     */

    /**
     * Constructs a new EventScore.
     * @exports EventScore
     * @classdesc Represents an EventScore.
     * @implements IEventScore
     * @constructor
     * @param {IEventScore=} [properties] Properties to set
     */
    function EventScore(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventScore value.
     * @member {string} value
     * @memberof EventScore
     * @instance
     */
    EventScore.prototype.value = "";

    /**
     * EventScore name.
     * @member {string} name
     * @memberof EventScore
     * @instance
     */
    EventScore.prototype.name = "";

    /**
     * EventScore info.
     * @member {string} info
     * @memberof EventScore
     * @instance
     */
    EventScore.prototype.info = "";

    /**
     * Creates a new EventScore instance using the specified properties.
     * @function create
     * @memberof EventScore
     * @static
     * @param {IEventScore=} [properties] Properties to set
     * @returns {EventScore} EventScore instance
     */
    EventScore.create = function create(properties) {
        return new EventScore(properties);
    };

    /**
     * Encodes the specified EventScore message. Does not implicitly {@link EventScore.verify|verify} messages.
     * @function encode
     * @memberof EventScore
     * @static
     * @param {IEventScore} message EventScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventScore.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.info != null && Object.hasOwnProperty.call(message, "info"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.info);
        return writer;
    };

    /**
     * Encodes the specified EventScore message, length delimited. Does not implicitly {@link EventScore.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EventScore
     * @static
     * @param {IEventScore} message EventScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventScore.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EventScore message from the specified reader or buffer.
     * @function decode
     * @memberof EventScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EventScore} EventScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventScore.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventScore();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.string();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.info = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: message });
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        return message;
    };

    /**
     * Decodes an EventScore message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EventScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EventScore} EventScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventScore.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EventScore message.
     * @function verify
     * @memberof EventScore
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EventScore.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.value))
            return "value: string expected";
        if (!$util.isString(message.name))
            return "name: string expected";
        if (message.info != null && message.hasOwnProperty("info"))
            if (!$util.isString(message.info))
                return "info: string expected";
        return null;
    };

    /**
     * Creates an EventScore message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EventScore
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EventScore} EventScore
     */
    EventScore.fromObject = function fromObject(object) {
        if (object instanceof $root.EventScore)
            return object;
        var message = new $root.EventScore();
        if (object.value != null)
            message.value = String(object.value);
        if (object.name != null)
            message.name = String(object.name);
        if (object.info != null)
            message.info = String(object.info);
        return message;
    };

    /**
     * Creates a plain object from an EventScore message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EventScore
     * @static
     * @param {EventScore} message EventScore
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EventScore.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.value = "";
            object.name = "";
            object.info = "";
        }
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.info != null && message.hasOwnProperty("info"))
            object.info = message.info;
        return object;
    };

    /**
     * Converts this EventScore to JSON.
     * @function toJSON
     * @memberof EventScore
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EventScore.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EventScore;
})();

$root.Player = (function() {

    /**
     * Properties of a Player.
     * @exports IPlayer
     * @interface IPlayer
     * @property {number} playerId Player playerId
     * @property {string} name Player name
     * @property {string} shortName Player shortName
     * @property {boolean} isHome Player isHome
     * @property {boolean} isInInitialLineUp Player isInInitialLineUp
     * @property {number} sortOrder Player sortOrder
     * @property {Array.<IPlayerData>|null} [data] Player data
     */

    /**
     * Constructs a new Player.
     * @exports Player
     * @classdesc Represents a Player.
     * @implements IPlayer
     * @constructor
     * @param {IPlayer=} [properties] Properties to set
     */
    function Player(properties) {
        this.data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Player playerId.
     * @member {number} playerId
     * @memberof Player
     * @instance
     */
    Player.prototype.playerId = 0;

    /**
     * Player name.
     * @member {string} name
     * @memberof Player
     * @instance
     */
    Player.prototype.name = "";

    /**
     * Player shortName.
     * @member {string} shortName
     * @memberof Player
     * @instance
     */
    Player.prototype.shortName = "";

    /**
     * Player isHome.
     * @member {boolean} isHome
     * @memberof Player
     * @instance
     */
    Player.prototype.isHome = false;

    /**
     * Player isInInitialLineUp.
     * @member {boolean} isInInitialLineUp
     * @memberof Player
     * @instance
     */
    Player.prototype.isInInitialLineUp = false;

    /**
     * Player sortOrder.
     * @member {number} sortOrder
     * @memberof Player
     * @instance
     */
    Player.prototype.sortOrder = 0;

    /**
     * Player data.
     * @member {Array.<IPlayerData>} data
     * @memberof Player
     * @instance
     */
    Player.prototype.data = $util.emptyArray;

    /**
     * Creates a new Player instance using the specified properties.
     * @function create
     * @memberof Player
     * @static
     * @param {IPlayer=} [properties] Properties to set
     * @returns {Player} Player instance
     */
    Player.create = function create(properties) {
        return new Player(properties);
    };

    /**
     * Encodes the specified Player message. Does not implicitly {@link Player.verify|verify} messages.
     * @function encode
     * @memberof Player
     * @static
     * @param {IPlayer} message Player message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Player.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.shortName);
        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isHome);
        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isInInitialLineUp);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sortOrder);
        if (message.data != null && message.data.length)
            for (var i = 0; i < message.data.length; ++i)
                $root.PlayerData.encode(message.data[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Player message, length delimited. Does not implicitly {@link Player.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Player
     * @static
     * @param {IPlayer} message Player message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Player.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Player message from the specified reader or buffer.
     * @function decode
     * @memberof Player
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Player} Player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Player.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.playerId = reader.int32();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.shortName = reader.string();
                break;
            case 4:
                message.isHome = reader.bool();
                break;
            case 5:
                message.isInInitialLineUp = reader.bool();
                break;
            case 6:
                message.sortOrder = reader.int32();
                break;
            case 7:
                if (!(message.data && message.data.length))
                    message.data = [];
                message.data.push($root.PlayerData.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: message });
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        if (!message.hasOwnProperty("shortName"))
            throw $util.ProtocolError("missing required 'shortName'", { instance: message });
        if (!message.hasOwnProperty("isHome"))
            throw $util.ProtocolError("missing required 'isHome'", { instance: message });
        if (!message.hasOwnProperty("isInInitialLineUp"))
            throw $util.ProtocolError("missing required 'isInInitialLineUp'", { instance: message });
        if (!message.hasOwnProperty("sortOrder"))
            throw $util.ProtocolError("missing required 'sortOrder'", { instance: message });
        return message;
    };

    /**
     * Decodes a Player message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Player
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Player} Player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Player.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Player message.
     * @function verify
     * @memberof Player
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Player.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.playerId))
            return "playerId: integer expected";
        if (!$util.isString(message.name))
            return "name: string expected";
        if (!$util.isString(message.shortName))
            return "shortName: string expected";
        if (typeof message.isHome !== "boolean")
            return "isHome: boolean expected";
        if (typeof message.isInInitialLineUp !== "boolean")
            return "isInInitialLineUp: boolean expected";
        if (!$util.isInteger(message.sortOrder))
            return "sortOrder: integer expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            if (!Array.isArray(message.data))
                return "data: array expected";
            for (var i = 0; i < message.data.length; ++i) {
                var error = $root.PlayerData.verify(message.data[i]);
                if (error)
                    return "data." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Player message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Player
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Player} Player
     */
    Player.fromObject = function fromObject(object) {
        if (object instanceof $root.Player)
            return object;
        var message = new $root.Player();
        if (object.playerId != null)
            message.playerId = object.playerId | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.shortName != null)
            message.shortName = String(object.shortName);
        if (object.isHome != null)
            message.isHome = Boolean(object.isHome);
        if (object.isInInitialLineUp != null)
            message.isInInitialLineUp = Boolean(object.isInInitialLineUp);
        if (object.sortOrder != null)
            message.sortOrder = object.sortOrder | 0;
        if (object.data) {
            if (!Array.isArray(object.data))
                throw TypeError(".Player.data: array expected");
            message.data = [];
            for (var i = 0; i < object.data.length; ++i) {
                if (typeof object.data[i] !== "object")
                    throw TypeError(".Player.data: object expected");
                message.data[i] = $root.PlayerData.fromObject(object.data[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Player message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Player
     * @static
     * @param {Player} message Player
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Player.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.data = [];
        if (options.defaults) {
            object.playerId = 0;
            object.name = "";
            object.shortName = "";
            object.isHome = false;
            object.isInInitialLineUp = false;
            object.sortOrder = 0;
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.shortName != null && message.hasOwnProperty("shortName"))
            object.shortName = message.shortName;
        if (message.isHome != null && message.hasOwnProperty("isHome"))
            object.isHome = message.isHome;
        if (message.isInInitialLineUp != null && message.hasOwnProperty("isInInitialLineUp"))
            object.isInInitialLineUp = message.isInInitialLineUp;
        if (message.sortOrder != null && message.hasOwnProperty("sortOrder"))
            object.sortOrder = message.sortOrder;
        if (message.data && message.data.length) {
            object.data = [];
            for (var j = 0; j < message.data.length; ++j)
                object.data[j] = $root.PlayerData.toObject(message.data[j], options);
        }
        return object;
    };

    /**
     * Converts this Player to JSON.
     * @function toJSON
     * @memberof Player
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Player.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Player;
})();

$root.PlayerData = (function() {

    /**
     * Properties of a PlayerData.
     * @exports IPlayerData
     * @interface IPlayerData
     * @property {number} innings PlayerData innings
     * @property {number} runs PlayerData runs
     * @property {number} fours PlayerData fours
     * @property {number} sixes PlayerData sixes
     * @property {number} isDismissed PlayerData isDismissed
     * @property {string|null} [dismissalType] PlayerData dismissalType
     * @property {number} hasComeInToBat PlayerData hasComeInToBat
     * @property {string|null} [dismissalInfo] PlayerData dismissalInfo
     * @property {number} sortOrder PlayerData sortOrder
     * @property {number} balls PlayerData balls
     * @property {IBowlingData|null} [bowlingData] PlayerData bowlingData
     */

    /**
     * Constructs a new PlayerData.
     * @exports PlayerData
     * @classdesc Represents a PlayerData.
     * @implements IPlayerData
     * @constructor
     * @param {IPlayerData=} [properties] Properties to set
     */
    function PlayerData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerData innings.
     * @member {number} innings
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.innings = 0;

    /**
     * PlayerData runs.
     * @member {number} runs
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.runs = 0;

    /**
     * PlayerData fours.
     * @member {number} fours
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.fours = 0;

    /**
     * PlayerData sixes.
     * @member {number} sixes
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.sixes = 0;

    /**
     * PlayerData isDismissed.
     * @member {number} isDismissed
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.isDismissed = 0;

    /**
     * PlayerData dismissalType.
     * @member {string} dismissalType
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.dismissalType = "";

    /**
     * PlayerData hasComeInToBat.
     * @member {number} hasComeInToBat
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.hasComeInToBat = 0;

    /**
     * PlayerData dismissalInfo.
     * @member {string} dismissalInfo
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.dismissalInfo = "";

    /**
     * PlayerData sortOrder.
     * @member {number} sortOrder
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.sortOrder = 0;

    /**
     * PlayerData balls.
     * @member {number} balls
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.balls = 0;

    /**
     * PlayerData bowlingData.
     * @member {IBowlingData|null|undefined} bowlingData
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.bowlingData = null;

    /**
     * Creates a new PlayerData instance using the specified properties.
     * @function create
     * @memberof PlayerData
     * @static
     * @param {IPlayerData=} [properties] Properties to set
     * @returns {PlayerData} PlayerData instance
     */
    PlayerData.create = function create(properties) {
        return new PlayerData(properties);
    };

    /**
     * Encodes the specified PlayerData message. Does not implicitly {@link PlayerData.verify|verify} messages.
     * @function encode
     * @memberof PlayerData
     * @static
     * @param {IPlayerData} message PlayerData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.innings);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.runs);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fours);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sixes);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.isDismissed);
        if (message.dismissalType != null && Object.hasOwnProperty.call(message, "dismissalType"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.dismissalType);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.hasComeInToBat);
        if (message.dismissalInfo != null && Object.hasOwnProperty.call(message, "dismissalInfo"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.dismissalInfo);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.sortOrder);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.balls);
        if (message.bowlingData != null && Object.hasOwnProperty.call(message, "bowlingData"))
            $root.BowlingData.encode(message.bowlingData, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PlayerData message, length delimited. Does not implicitly {@link PlayerData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerData
     * @static
     * @param {IPlayerData} message PlayerData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerData message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerData} PlayerData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.innings = reader.int32();
                break;
            case 2:
                message.runs = reader.int32();
                break;
            case 3:
                message.fours = reader.int32();
                break;
            case 4:
                message.sixes = reader.int32();
                break;
            case 5:
                message.isDismissed = reader.int32();
                break;
            case 6:
                message.dismissalType = reader.string();
                break;
            case 7:
                message.hasComeInToBat = reader.int32();
                break;
            case 8:
                message.dismissalInfo = reader.string();
                break;
            case 9:
                message.sortOrder = reader.int32();
                break;
            case 10:
                message.balls = reader.int32();
                break;
            case 11:
                message.bowlingData = $root.BowlingData.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("innings"))
            throw $util.ProtocolError("missing required 'innings'", { instance: message });
        if (!message.hasOwnProperty("runs"))
            throw $util.ProtocolError("missing required 'runs'", { instance: message });
        if (!message.hasOwnProperty("fours"))
            throw $util.ProtocolError("missing required 'fours'", { instance: message });
        if (!message.hasOwnProperty("sixes"))
            throw $util.ProtocolError("missing required 'sixes'", { instance: message });
        if (!message.hasOwnProperty("isDismissed"))
            throw $util.ProtocolError("missing required 'isDismissed'", { instance: message });
        if (!message.hasOwnProperty("hasComeInToBat"))
            throw $util.ProtocolError("missing required 'hasComeInToBat'", { instance: message });
        if (!message.hasOwnProperty("sortOrder"))
            throw $util.ProtocolError("missing required 'sortOrder'", { instance: message });
        if (!message.hasOwnProperty("balls"))
            throw $util.ProtocolError("missing required 'balls'", { instance: message });
        return message;
    };

    /**
     * Decodes a PlayerData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerData} PlayerData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerData message.
     * @function verify
     * @memberof PlayerData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.innings))
            return "innings: integer expected";
        if (!$util.isInteger(message.runs))
            return "runs: integer expected";
        if (!$util.isInteger(message.fours))
            return "fours: integer expected";
        if (!$util.isInteger(message.sixes))
            return "sixes: integer expected";
        if (!$util.isInteger(message.isDismissed))
            return "isDismissed: integer expected";
        if (message.dismissalType != null && message.hasOwnProperty("dismissalType"))
            if (!$util.isString(message.dismissalType))
                return "dismissalType: string expected";
        if (!$util.isInteger(message.hasComeInToBat))
            return "hasComeInToBat: integer expected";
        if (message.dismissalInfo != null && message.hasOwnProperty("dismissalInfo"))
            if (!$util.isString(message.dismissalInfo))
                return "dismissalInfo: string expected";
        if (!$util.isInteger(message.sortOrder))
            return "sortOrder: integer expected";
        if (!$util.isInteger(message.balls))
            return "balls: integer expected";
        if (message.bowlingData != null && message.hasOwnProperty("bowlingData")) {
            var error = $root.BowlingData.verify(message.bowlingData);
            if (error)
                return "bowlingData." + error;
        }
        return null;
    };

    /**
     * Creates a PlayerData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerData} PlayerData
     */
    PlayerData.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerData)
            return object;
        var message = new $root.PlayerData();
        if (object.innings != null)
            message.innings = object.innings | 0;
        if (object.runs != null)
            message.runs = object.runs | 0;
        if (object.fours != null)
            message.fours = object.fours | 0;
        if (object.sixes != null)
            message.sixes = object.sixes | 0;
        if (object.isDismissed != null)
            message.isDismissed = object.isDismissed | 0;
        if (object.dismissalType != null)
            message.dismissalType = String(object.dismissalType);
        if (object.hasComeInToBat != null)
            message.hasComeInToBat = object.hasComeInToBat | 0;
        if (object.dismissalInfo != null)
            message.dismissalInfo = String(object.dismissalInfo);
        if (object.sortOrder != null)
            message.sortOrder = object.sortOrder | 0;
        if (object.balls != null)
            message.balls = object.balls | 0;
        if (object.bowlingData != null) {
            if (typeof object.bowlingData !== "object")
                throw TypeError(".PlayerData.bowlingData: object expected");
            message.bowlingData = $root.BowlingData.fromObject(object.bowlingData);
        }
        return message;
    };

    /**
     * Creates a plain object from a PlayerData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerData
     * @static
     * @param {PlayerData} message PlayerData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.innings = 0;
            object.runs = 0;
            object.fours = 0;
            object.sixes = 0;
            object.isDismissed = 0;
            object.dismissalType = "";
            object.hasComeInToBat = 0;
            object.dismissalInfo = "";
            object.sortOrder = 0;
            object.balls = 0;
            object.bowlingData = null;
        }
        if (message.innings != null && message.hasOwnProperty("innings"))
            object.innings = message.innings;
        if (message.runs != null && message.hasOwnProperty("runs"))
            object.runs = message.runs;
        if (message.fours != null && message.hasOwnProperty("fours"))
            object.fours = message.fours;
        if (message.sixes != null && message.hasOwnProperty("sixes"))
            object.sixes = message.sixes;
        if (message.isDismissed != null && message.hasOwnProperty("isDismissed"))
            object.isDismissed = message.isDismissed;
        if (message.dismissalType != null && message.hasOwnProperty("dismissalType"))
            object.dismissalType = message.dismissalType;
        if (message.hasComeInToBat != null && message.hasOwnProperty("hasComeInToBat"))
            object.hasComeInToBat = message.hasComeInToBat;
        if (message.dismissalInfo != null && message.hasOwnProperty("dismissalInfo"))
            object.dismissalInfo = message.dismissalInfo;
        if (message.sortOrder != null && message.hasOwnProperty("sortOrder"))
            object.sortOrder = message.sortOrder;
        if (message.balls != null && message.hasOwnProperty("balls"))
            object.balls = message.balls;
        if (message.bowlingData != null && message.hasOwnProperty("bowlingData"))
            object.bowlingData = $root.BowlingData.toObject(message.bowlingData, options);
        return object;
    };

    /**
     * Converts this PlayerData to JSON.
     * @function toJSON
     * @memberof PlayerData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlayerData;
})();

$root.BowlingData = (function() {

    /**
     * Properties of a BowlingData.
     * @exports IBowlingData
     * @interface IBowlingData
     * @property {number} innings BowlingData innings
     * @property {number} runs BowlingData runs
     * @property {number} overs BowlingData overs
     * @property {number} maiden BowlingData maiden
     * @property {number} wickets BowlingData wickets
     * @property {number} economy BowlingData economy
     * @property {number} wides BowlingData wides
     * @property {number} noBalls BowlingData noBalls
     * @property {number} sortOrder BowlingData sortOrder
     */

    /**
     * Constructs a new BowlingData.
     * @exports BowlingData
     * @classdesc Represents a BowlingData.
     * @implements IBowlingData
     * @constructor
     * @param {IBowlingData=} [properties] Properties to set
     */
    function BowlingData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BowlingData innings.
     * @member {number} innings
     * @memberof BowlingData
     * @instance
     */
    BowlingData.prototype.innings = 0;

    /**
     * BowlingData runs.
     * @member {number} runs
     * @memberof BowlingData
     * @instance
     */
    BowlingData.prototype.runs = 0;

    /**
     * BowlingData overs.
     * @member {number} overs
     * @memberof BowlingData
     * @instance
     */
    BowlingData.prototype.overs = 0;

    /**
     * BowlingData maiden.
     * @member {number} maiden
     * @memberof BowlingData
     * @instance
     */
    BowlingData.prototype.maiden = 0;

    /**
     * BowlingData wickets.
     * @member {number} wickets
     * @memberof BowlingData
     * @instance
     */
    BowlingData.prototype.wickets = 0;

    /**
     * BowlingData economy.
     * @member {number} economy
     * @memberof BowlingData
     * @instance
     */
    BowlingData.prototype.economy = 0;

    /**
     * BowlingData wides.
     * @member {number} wides
     * @memberof BowlingData
     * @instance
     */
    BowlingData.prototype.wides = 0;

    /**
     * BowlingData noBalls.
     * @member {number} noBalls
     * @memberof BowlingData
     * @instance
     */
    BowlingData.prototype.noBalls = 0;

    /**
     * BowlingData sortOrder.
     * @member {number} sortOrder
     * @memberof BowlingData
     * @instance
     */
    BowlingData.prototype.sortOrder = 0;

    /**
     * Creates a new BowlingData instance using the specified properties.
     * @function create
     * @memberof BowlingData
     * @static
     * @param {IBowlingData=} [properties] Properties to set
     * @returns {BowlingData} BowlingData instance
     */
    BowlingData.create = function create(properties) {
        return new BowlingData(properties);
    };

    /**
     * Encodes the specified BowlingData message. Does not implicitly {@link BowlingData.verify|verify} messages.
     * @function encode
     * @memberof BowlingData
     * @static
     * @param {IBowlingData} message BowlingData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BowlingData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.innings);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.runs);
        writer.uint32(/* id 3, wireType 1 =*/25).double(message.overs);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maiden);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.wickets);
        writer.uint32(/* id 6, wireType 1 =*/49).double(message.economy);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.wides);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.noBalls);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.sortOrder);
        return writer;
    };

    /**
     * Encodes the specified BowlingData message, length delimited. Does not implicitly {@link BowlingData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BowlingData
     * @static
     * @param {IBowlingData} message BowlingData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BowlingData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BowlingData message from the specified reader or buffer.
     * @function decode
     * @memberof BowlingData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BowlingData} BowlingData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BowlingData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BowlingData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.innings = reader.int32();
                break;
            case 2:
                message.runs = reader.int32();
                break;
            case 3:
                message.overs = reader.double();
                break;
            case 4:
                message.maiden = reader.int32();
                break;
            case 5:
                message.wickets = reader.int32();
                break;
            case 6:
                message.economy = reader.double();
                break;
            case 7:
                message.wides = reader.int32();
                break;
            case 8:
                message.noBalls = reader.int32();
                break;
            case 9:
                message.sortOrder = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("innings"))
            throw $util.ProtocolError("missing required 'innings'", { instance: message });
        if (!message.hasOwnProperty("runs"))
            throw $util.ProtocolError("missing required 'runs'", { instance: message });
        if (!message.hasOwnProperty("overs"))
            throw $util.ProtocolError("missing required 'overs'", { instance: message });
        if (!message.hasOwnProperty("maiden"))
            throw $util.ProtocolError("missing required 'maiden'", { instance: message });
        if (!message.hasOwnProperty("wickets"))
            throw $util.ProtocolError("missing required 'wickets'", { instance: message });
        if (!message.hasOwnProperty("economy"))
            throw $util.ProtocolError("missing required 'economy'", { instance: message });
        if (!message.hasOwnProperty("wides"))
            throw $util.ProtocolError("missing required 'wides'", { instance: message });
        if (!message.hasOwnProperty("noBalls"))
            throw $util.ProtocolError("missing required 'noBalls'", { instance: message });
        if (!message.hasOwnProperty("sortOrder"))
            throw $util.ProtocolError("missing required 'sortOrder'", { instance: message });
        return message;
    };

    /**
     * Decodes a BowlingData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BowlingData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BowlingData} BowlingData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BowlingData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BowlingData message.
     * @function verify
     * @memberof BowlingData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BowlingData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.innings))
            return "innings: integer expected";
        if (!$util.isInteger(message.runs))
            return "runs: integer expected";
        if (typeof message.overs !== "number")
            return "overs: number expected";
        if (!$util.isInteger(message.maiden))
            return "maiden: integer expected";
        if (!$util.isInteger(message.wickets))
            return "wickets: integer expected";
        if (typeof message.economy !== "number")
            return "economy: number expected";
        if (!$util.isInteger(message.wides))
            return "wides: integer expected";
        if (!$util.isInteger(message.noBalls))
            return "noBalls: integer expected";
        if (!$util.isInteger(message.sortOrder))
            return "sortOrder: integer expected";
        return null;
    };

    /**
     * Creates a BowlingData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BowlingData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BowlingData} BowlingData
     */
    BowlingData.fromObject = function fromObject(object) {
        if (object instanceof $root.BowlingData)
            return object;
        var message = new $root.BowlingData();
        if (object.innings != null)
            message.innings = object.innings | 0;
        if (object.runs != null)
            message.runs = object.runs | 0;
        if (object.overs != null)
            message.overs = Number(object.overs);
        if (object.maiden != null)
            message.maiden = object.maiden | 0;
        if (object.wickets != null)
            message.wickets = object.wickets | 0;
        if (object.economy != null)
            message.economy = Number(object.economy);
        if (object.wides != null)
            message.wides = object.wides | 0;
        if (object.noBalls != null)
            message.noBalls = object.noBalls | 0;
        if (object.sortOrder != null)
            message.sortOrder = object.sortOrder | 0;
        return message;
    };

    /**
     * Creates a plain object from a BowlingData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BowlingData
     * @static
     * @param {BowlingData} message BowlingData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BowlingData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.innings = 0;
            object.runs = 0;
            object.overs = 0;
            object.maiden = 0;
            object.wickets = 0;
            object.economy = 0;
            object.wides = 0;
            object.noBalls = 0;
            object.sortOrder = 0;
        }
        if (message.innings != null && message.hasOwnProperty("innings"))
            object.innings = message.innings;
        if (message.runs != null && message.hasOwnProperty("runs"))
            object.runs = message.runs;
        if (message.overs != null && message.hasOwnProperty("overs"))
            object.overs = options.json && !isFinite(message.overs) ? String(message.overs) : message.overs;
        if (message.maiden != null && message.hasOwnProperty("maiden"))
            object.maiden = message.maiden;
        if (message.wickets != null && message.hasOwnProperty("wickets"))
            object.wickets = message.wickets;
        if (message.economy != null && message.hasOwnProperty("economy"))
            object.economy = options.json && !isFinite(message.economy) ? String(message.economy) : message.economy;
        if (message.wides != null && message.hasOwnProperty("wides"))
            object.wides = message.wides;
        if (message.noBalls != null && message.hasOwnProperty("noBalls"))
            object.noBalls = message.noBalls;
        if (message.sortOrder != null && message.hasOwnProperty("sortOrder"))
            object.sortOrder = message.sortOrder;
        return object;
    };

    /**
     * Converts this BowlingData to JSON.
     * @function toJSON
     * @memberof BowlingData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BowlingData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BowlingData;
})();

$root.FallOfWicket = (function() {

    /**
     * Properties of a FallOfWicket.
     * @exports IFallOfWicket
     * @interface IFallOfWicket
     * @property {string} name FallOfWicket name
     * @property {string} value FallOfWicket value
     */

    /**
     * Constructs a new FallOfWicket.
     * @exports FallOfWicket
     * @classdesc Represents a FallOfWicket.
     * @implements IFallOfWicket
     * @constructor
     * @param {IFallOfWicket=} [properties] Properties to set
     */
    function FallOfWicket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FallOfWicket name.
     * @member {string} name
     * @memberof FallOfWicket
     * @instance
     */
    FallOfWicket.prototype.name = "";

    /**
     * FallOfWicket value.
     * @member {string} value
     * @memberof FallOfWicket
     * @instance
     */
    FallOfWicket.prototype.value = "";

    /**
     * Creates a new FallOfWicket instance using the specified properties.
     * @function create
     * @memberof FallOfWicket
     * @static
     * @param {IFallOfWicket=} [properties] Properties to set
     * @returns {FallOfWicket} FallOfWicket instance
     */
    FallOfWicket.create = function create(properties) {
        return new FallOfWicket(properties);
    };

    /**
     * Encodes the specified FallOfWicket message. Does not implicitly {@link FallOfWicket.verify|verify} messages.
     * @function encode
     * @memberof FallOfWicket
     * @static
     * @param {IFallOfWicket} message FallOfWicket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FallOfWicket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified FallOfWicket message, length delimited. Does not implicitly {@link FallOfWicket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FallOfWicket
     * @static
     * @param {IFallOfWicket} message FallOfWicket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FallOfWicket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FallOfWicket message from the specified reader or buffer.
     * @function decode
     * @memberof FallOfWicket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FallOfWicket} FallOfWicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FallOfWicket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FallOfWicket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.value = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        if (!message.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: message });
        return message;
    };

    /**
     * Decodes a FallOfWicket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FallOfWicket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FallOfWicket} FallOfWicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FallOfWicket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FallOfWicket message.
     * @function verify
     * @memberof FallOfWicket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FallOfWicket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.name))
            return "name: string expected";
        if (!$util.isString(message.value))
            return "value: string expected";
        return null;
    };

    /**
     * Creates a FallOfWicket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FallOfWicket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FallOfWicket} FallOfWicket
     */
    FallOfWicket.fromObject = function fromObject(object) {
        if (object instanceof $root.FallOfWicket)
            return object;
        var message = new $root.FallOfWicket();
        if (object.name != null)
            message.name = String(object.name);
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a FallOfWicket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FallOfWicket
     * @static
     * @param {FallOfWicket} message FallOfWicket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FallOfWicket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.value = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this FallOfWicket to JSON.
     * @function toJSON
     * @memberof FallOfWicket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FallOfWicket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FallOfWicket;
})();