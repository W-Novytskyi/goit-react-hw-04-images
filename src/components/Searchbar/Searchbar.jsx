import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  Button,
  LabelBtn,
  Input,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export default function Searchbar(props) {
  const [searchName, setSearchName] = useState('');

  const handleChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchName.trim() === '') {
      return toast.error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    props.onSubmit(searchName);
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <FcSearch />
          <LabelBtn>Search</LabelBtn>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchName"
          value={searchName}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class Searchbar extends Component {
//   state = {
//     searchName: '',
//   };

//   handleChange = event => {
//     this.setState({ searchName: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.searchName.trim() === '') {
//       return toast.error(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     }

//     this.props.onSubmit(this.state.searchName);
//   };

//   render() {
//     return (
//       <Header>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <Button type="submit">
//             <FcSearch />
//             <LabelBtn>Search</LabelBtn>
//           </Button>

//           <Input
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             name="searchName"
//             value={this.state.searchName}
//             onChange={this.handleChange}
//           />
//         </SearchForm>
//       </Header>
//     );
//   }
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Searchbar;
