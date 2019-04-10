import axios from 'axios'

import { Component , PureComponent } from 'react'

Component.prototype.axios = axios
PureComponent.prototype.axios = axios