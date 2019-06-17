import "@babel/polyfill";
import styles from './styles/index.scss';
import * as d3 from "d3";

d3.select('#activities').append('h1').text('hello').attr('class', styles.wrapper)