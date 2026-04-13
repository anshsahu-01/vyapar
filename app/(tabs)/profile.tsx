import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=12",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Ansh Sahu</Text>
        <Text style={styles.bio}>
          MERN Stack Developer 🚀 | Building something crazy
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>180</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.btnText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryBtn}>
          <Text style={styles.btnText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Options */}
      <View style={styles.options}>
        {["Settings", "Saved", "Privacy", "Help", "Logout"].map(
          (item, index) => (
            <TouchableOpacity key={index} style={styles.optionItem}>
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  header: {
    alignItems: "center",
    marginTop: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#38bdf8",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  bio: {
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 25,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    color: "#94a3b8",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  primaryBtn: {
    backgroundColor: "#38bdf8",
    padding: 10,
    borderRadius: 8,
    width: "40%",
    alignItems: "center",
  },
  secondaryBtn: {
    backgroundColor: "#1e293b",
    padding: 10,
    borderRadius: 8,
    width: "40%",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
  options: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  optionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#1e293b",
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
  },
});
