const Group = require('../models/Group');
const User = require('../models/User');

exports.createGroup = async (req, res) => {
  try {
    const { groupName, members } = req.body;

    // Check if members exist in the database
    const existingMembers = await User.find({ _id: { $in: members } });
    if (existingMembers.length !== members.length) {
      return res.status(400).json({ error: 'One or more members do not exist' });
    }

    // Create a new group
    const group = new Group({ groupName, members });
    await group.save();

    res.json({ message: 'Group created successfully', group });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.editGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const { groupName, members } = req.body;

    // Find the group by ID
    const group = await Group.findById(groupId);

    // If group not found
    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    // Update group properties if provided in the request
    if (groupName) {
      group.groupName = groupName;
    }

    if (members) {
      // Check if members exist in the database
      const existingMembers = await User.find({ _id: { $in: members } });
      if (existingMembers.length !== members.length) {
        return res.status(400).json({ error: 'One or more members do not exist' });
      }

      group.members = members;
    }

    // Save the updated group
    await group.save();

    res.json({ message: 'Group updated successfully', group });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteGroup = async (req, res) => {
  try {
    const { groupId } = req.params;

    // Find and delete the group by ID
    const deletedGroup = await Group.findByIdAndDelete(groupId);

    // If group not found
    if (!deletedGroup) {
      return res.status(404).json({ error: 'Group not found' });
    }

    res.json({ message: 'Group deleted successfully', deletedGroup });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.searchGroups = async (req, res) => {
  try {
    const { keyword } = req.query;
 
    // Search for groups with names containing the keyword
    const groups = await Group.find({ groupName: { $regex: keyword, $options: 'i' } });

    res.json({ groups });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
