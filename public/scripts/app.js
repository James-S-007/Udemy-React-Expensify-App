'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handle_delete_options = _this.handle_delete_options.bind(_this);
        _this.handle_delete_option = _this.handle_delete_option.bind(_this);
        _this.handle_pick = _this.handle_pick.bind(_this);
        _this.handle_add_option = _this.handle_add_option.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var options = JSON.parse(localStorage.getItem('options'));
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // if json data invalid
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                console.log('Saving data...');
                localStorage.setItem('options', JSON.stringify(this.state.options));
            }
        }
    }, {
        key: 'handle_delete_options',
        value: function handle_delete_options() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handle_delete_option',
        value: function handle_delete_option(option_to_remove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option !== option_to_remove;
                    })
                };
            });
        }
    }, {
        key: 'handle_pick',
        value: function handle_pick() {
            var random_num = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[random_num];
            alert(option);
        }
    }, {
        key: 'handle_add_option',
        value: function handle_add_option(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            this.setState(function (prev_state) {
                return { options: prev_state.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = "Put your life in the hands of a computer";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { has_options: this.state.options.length > 0,
                    handle_pick: this.handle_pick
                }),
                React.createElement(Options, { options: this.state.options,
                    handle_delete_options: this.handle_delete_options,
                    handle_delete_option: this.handle_delete_option
                }),
                React.createElement(AddOption, { handle_add_option: this.handle_add_option })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handle_pick, disabled: !props.has_options },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handle_delete_options },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option,
                option_text: option,
                handle_delete_option: props.handle_delete_option
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option_text,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handle_delete_option(props.option_text);
                } },
            'remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handle_add_option = _this2.handle_add_option.bind(_this2);
        _this2.state = {
            err: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handle_add_option',
        value: function handle_add_option(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var err = this.props.handle_add_option(option);
            this.setState(function () {
                return { err: err };
            });
            if (!err) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.err && React.createElement(
                    'p',
                    null,
                    this.state.err
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handle_add_option },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
