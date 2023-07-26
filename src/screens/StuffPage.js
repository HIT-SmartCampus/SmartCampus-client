import React from 'react';

function LecturersAndTeams() {
    return (
      <div style={styles.lecturersAndTeamsContainer}>
        <h1 style={styles.lecturersAndTeamsHeading}>Lecturers and Teams</h1>
        <ul style={styles.cardList}>
          <li>
            <div style={styles.card}>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4HBggQBwgICA4JBgoGCwoKBw8ICQgKIB0iIiAdHx8kHSggJBoxMx8TJjEhJSkrLi4uHh8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJYAlgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAQIGB//EADYQAQACAQICBQkGBwAAAAAAAAABAgMEERIiBRMhMlEjMUFCUmFxcpFigYKhsdEVM3OSouHx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP2QAAAAAAAAAAAAAAAAAAAAAAAAAAmdo7exX1WrrgjbvWnzV8PizM2ovmnylp+WOWsA1L6vHSe3JE+6vMj/AIhj39f+xlANvHqseSeXJX4Ty/qlfPp8GrvhmNrcUezbu/6BsiLT6iuevLO0x56z3oSgAAAAAAAAAAIdXm6jDMx555ax9pMzOlcm+asezTi/FIKdpm0zMzMzPNMy4AAAAAPWLJOK8TSdpj/Jt4rxlx1mPWrxfBhNLorJvTJE+rato+//AIC8AAAAAAAAAAxtfO+ryfhr+UNlja+NtXk+av6QCAAAAAABd6Kny9/fi4vzhSXOio8vb+lb9YBqAAAAAAAAAAMTV5Iyam80neJ4dp+7Zs5Y3xX29NLbfRggAAAAAALfRuSKZ54p2468EfNuqPeGN8uPb03rt9QboAAAAAAAAADH1unnDlnaJ4bW4qz4e5sOXrF6TFo3i1eGQYA9ZadXktE+rbheQAAAAF3o7TzOSL2iYivd39NkGkxddnrExvEc9vlbUdkdgAAAAAAAAAAAAKHSWm3jjpHmrzx9nxZz6CY3iYnt3rwywL14bzE+ra1QcAABLpKdZqccT7fFP3doNLQafqcczaOa/n91fBZAAAAAAAAAAJnhid5iNvPMqebpClN+ribz492oLiLLqaYt+K8TPs15rMrNq75d97TWPZry1Qgv5ekpn+VSI99v2Ub24rTMzvNrWtPzOAAAD3iyTivE023jxh4AaOLpLfbrabe+n7LeLPTL3L1t7u7b6MMjsnsB9AMjDrr49t5448LfuvYNdTLtvPBPhbu/UFkAAABW1Osrh3ivPbwjux8Uev1XVxw452tNeafYqzASZs980+UtM+FY7tUYAAAAAAAAAAAAAnwau+GY2nij2bd1p6fU1zx2Twz6aT3mK7E8MxMTMTHNEwDfFbRarr6TFtotXz/ajxdBkXtN7TNp3m1t5cAAAAAAAAAAAAAAAAAHazMd2Zj0djgA/9k=" alt="Lecturer" style={styles.cardImg} />
              <h3 style={styles.cardTitle}>Mark Israel</h3>
              <p style={styles.cardText}>Project Manager</p>
            </div>
          </li>
          <li>
            <div style={styles.card}>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4HBggQBwgICA4JBgoGCwoKBw8ICQgKIB0iIiAdHx8kHSggJBoxMx8TJjEhJSkrLi4uHh8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJYAlgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAQIGB//EADYQAQACAQICBQkGBwAAAAAAAAABAgMEERIiBRMhMlEjMUFCUmFxcpFigYKhsdEVM3OSouHx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP2QAAAAAAAAAAAAAAAAAAAAAAAAAAmdo7exX1WrrgjbvWnzV8PizM2ovmnylp+WOWsA1L6vHSe3JE+6vMj/AIhj39f+xlANvHqseSeXJX4Ty/qlfPp8GrvhmNrcUezbu/6BsiLT6iuevLO0x56z3oSgAAAAAAAAAAIdXm6jDMx555ax9pMzOlcm+asezTi/FIKdpm0zMzMzPNMy4AAAAAPWLJOK8TSdpj/Jt4rxlx1mPWrxfBhNLorJvTJE+rato+//AIC8AAAAAAAAAAxtfO+ryfhr+UNlja+NtXk+av6QCAAAAAABd6Kny9/fi4vzhSXOio8vb+lb9YBqAAAAAAAAAAMTV5Iyam80neJ4dp+7Zs5Y3xX29NLbfRggAAAAAALfRuSKZ54p2468EfNuqPeGN8uPb03rt9QboAAAAAAAAADH1unnDlnaJ4bW4qz4e5sOXrF6TFo3i1eGQYA9ZadXktE+rbheQAAAAF3o7TzOSL2iYivd39NkGkxddnrExvEc9vlbUdkdgAAAAAAAAAAAAKHSWm3jjpHmrzx9nxZz6CY3iYnt3rwywL14bzE+ra1QcAABLpKdZqccT7fFP3doNLQafqcczaOa/n91fBZAAAAAAAAAAJnhid5iNvPMqebpClN+ribz492oLiLLqaYt+K8TPs15rMrNq75d97TWPZry1Qgv5ekpn+VSI99v2Ub24rTMzvNrWtPzOAAAD3iyTivE023jxh4AaOLpLfbrabe+n7LeLPTL3L1t7u7b6MMjsnsB9AMjDrr49t5448LfuvYNdTLtvPBPhbu/UFkAAABW1Osrh3ivPbwjux8Uev1XVxw452tNeafYqzASZs980+UtM+FY7tUYAAAAAAAAAAAAAnwau+GY2nij2bd1p6fU1zx2Twz6aT3mK7E8MxMTMTHNEwDfFbRarr6TFtotXz/ajxdBkXtN7TNp3m1t5cAAAAAAAAAAAAAAAAAHazMd2Zj0djgA/9k=" alt="Lecturer" style={styles.cardImg} />
              <h3 style={styles.cardTitle}>Ilya Vogman</h3>
              <p style={styles.cardText}>Lecturer</p>
            </div>
          </li>
          <li>
            <div style={styles.card}>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4HBggQBwgICA4JBgoGCwoKBw8ICQgKIB0iIiAdHx8kHSggJBoxMx8TJjEhJSkrLi4uHh8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJYAlgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAQIGB//EADYQAQACAQICBQkGBwAAAAAAAAABAgMEERIiBRMhMlEjMUFCUmFxcpFigYKhsdEVM3OSouHx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP2QAAAAAAAAAAAAAAAAAAAAAAAAAAmdo7exX1WrrgjbvWnzV8PizM2ovmnylp+WOWsA1L6vHSe3JE+6vMj/AIhj39f+xlANvHqseSeXJX4Ty/qlfPp8GrvhmNrcUezbu/6BsiLT6iuevLO0x56z3oSgAAAAAAAAAAIdXm6jDMx555ax9pMzOlcm+asezTi/FIKdpm0zMzMzPNMy4AAAAAPWLJOK8TSdpj/Jt4rxlx1mPWrxfBhNLorJvTJE+rato+//AIC8AAAAAAAAAAxtfO+ryfhr+UNlja+NtXk+av6QCAAAAAABd6Kny9/fi4vzhSXOio8vb+lb9YBqAAAAAAAAAAMTV5Iyam80neJ4dp+7Zs5Y3xX29NLbfRggAAAAAALfRuSKZ54p2468EfNuqPeGN8uPb03rt9QboAAAAAAAAADH1unnDlnaJ4bW4qz4e5sOXrF6TFo3i1eGQYA9ZadXktE+rbheQAAAAF3o7TzOSL2iYivd39NkGkxddnrExvEc9vlbUdkdgAAAAAAAAAAAAKHSWm3jjpHmrzx9nxZz6CY3iYnt3rwywL14bzE+ra1QcAABLpKdZqccT7fFP3doNLQafqcczaOa/n91fBZAAAAAAAAAAJnhid5iNvPMqebpClN+ribz492oLiLLqaYt+K8TPs15rMrNq75d97TWPZry1Qgv5ekpn+VSI99v2Ub24rTMzvNrWtPzOAAAD3iyTivE023jxh4AaOLpLfbrabe+n7LeLPTL3L1t7u7b6MMjsnsB9AMjDrr49t5448LfuvYNdTLtvPBPhbu/UFkAAABW1Osrh3ivPbwjux8Uev1XVxw452tNeafYqzASZs980+UtM+FY7tUYAAAAAAAAAAAAAnwau+GY2nij2bd1p6fU1zx2Twz6aT3mK7E8MxMTMTHNEwDfFbRarr6TFtotXz/ajxdBkXtN7TNp3m1t5cAAAAAAAAAAAAAAAAAHazMd2Zj0djgA/9k=" alt="Team" style={styles.cardImg} />
              <h3 style={styles.cardTitle}>NAME</h3>
              <p style={styles.cardText}>Lecturer</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }


const styles = {
  lecturersAndTeamsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
  },
  lecturersAndTeamsHeading: {
    fontSize: '3rem',
    marginBottom: '2rem',
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20rem',
    height: '20rem',
    margin: '2rem',
    padding: '2rem',
    borderRadius: '1rem',
    backgroundColor: '#fff',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease-in-out',
  },
  cardHover: {
    transform: 'translateY(-0.5rem)',
    boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.15)',
  },
  cardBefore: {
    content: '',
    position: 'absolute',
    top: '-0.25rem',
    left: '-0.25rem',
    width: 'calc(100% + 0.5rem)',
    height: 'calc(100% + 0.5rem)',
    borderRadius: '1rem',
    backgroundImage: 'linear-gradient(to bottom right, #007eff, #00bff3)',
    zIndex: '-1',
    opacity: '0',
    transition: 'all 0.3s ease-in-out',
  },
  cardBeforeHover: {
    opacity: '1',
  },
  cardImg: {
    width: '10rem',
    height: '10rem',
    borderRadius: '50%',
    marginBottom: '1.5rem',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  cardText: {
    fontSize: '1.2rem',
    textAlign: 'center',
  },
};

export default LecturersAndTeams;
