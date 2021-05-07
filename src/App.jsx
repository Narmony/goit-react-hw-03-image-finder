import React, { Component } from 'react';
import imageApi from './services/imageApi';

import './styles.css';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImgUrl: '',
  };

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }
  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      currentPage,
      searchQuery,
    };
    this.setState({ isLoading: true });

    imageApi(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    if (this.state.showModal) {
      this.setState({ largeImgUrl: '' });
    }
  };

  handleImage = e => {
    this.setState({ largeImgUrl: e.target.dataset.source });
    this.toggleModal();
  };

  render() {
    const { hits, isLoading, error, showModal, largeImgUrl } = this.state;
    const shouldShowBtn = hits.length > 0 && !isLoading;
    return (
      <div className="app">
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImgUrl} alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <h1>it's a mistaaake!!</h1>}
        <ImageGallery
          hits={hits}
          handlePage={this.fetchHits}
          // toggleModal={this.toggleModal}
          onOpenModal={this.handleImage}
        />
        {isLoading && (
          <Loader
            className="loader"
            type="TailSpin"
            color="#255ab0"
            height={50}
            width={50}
            timeout={5000}
          />
        )}
        {shouldShowBtn && <Button handlePage={this.fetchHits} />}
      </div>
    );
  }
}
export default App;
